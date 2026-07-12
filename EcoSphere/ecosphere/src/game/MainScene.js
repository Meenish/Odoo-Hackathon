import Phaser from "phaser";

import Player from "./Player";
import Enemy from "./Enemy";
import Bullet from "./Bullet";
import PowerUp from "./PowerUp";
import Boss from "./Boss";
import UI from "./UI";


export default class MainScene extends Phaser.Scene {


    constructor(){

        super("MainScene");

    }




    create(){


        this.cameras.main.setBackgroundColor("#87ceeb");



        this.add.rectangle(
            640,
            360,
            1280,
            720,
            0x87ceeb
        );




        this.clouds=[];


        for(let i=0;i<10;i++){


            let cloud=this.add.circle(

                Phaser.Math.Between(0,1280),

                Phaser.Math.Between(80,250),

                Phaser.Math.Between(30,60),

                0xffffff,

                0.8

            );


            cloud.speed=0.3;


            this.clouds.push(cloud);


        }





        this.add.rectangle(

            640,
            690,
            1280,
            60,
            0x228b22

        );






        this.player=new Player(this);


        this.ui=new UI(this);



        this.bullets=[];

        this.enemies=[];

        this.powerups=[];

        this.bossAttacks=[];



        this.boss=null;

        this.bossActive=false;

        this.bossDefeated=false;




        this.score=0;

        this.health=5;

        this.dead=false;



        this.restart=this.input.keyboard.addKey(

            Phaser.Input.Keyboard.KeyCodes.R

        );






        this.enemySpeed=0;



        this.enemyTimer=this.time.addEvent({

            delay:1500,

            callback:this.spawnEnemy,

            callbackScope:this,

            loop:true

        });





    }








    spawnEnemy(){


        if(this.dead || this.bossActive)

            return;



        let enemy=new Enemy(this);


        enemy.speed+=this.enemySpeed;


        this.enemies.push(enemy);


    }









    spawnBoss(){


        this.bossActive=true;


        this.boss=new Boss(this);


        this.add.text(

            430,
            140,

            "⚠ INDUSTRIAL DISASTER ⚠",

            {

                fontSize:"32px",

                color:"#ff3333",

                stroke:"#000000",

                strokeThickness:4

            }

        );


    }








    createExplosion(x,y){



        let e=this.add.circle(

            x,

            y,

            10,

            0x00ff66

        );



        this.tweens.add({

            targets:e,

            scale:4,

            alpha:0,

            duration:400,

            onComplete:()=>{

                e.destroy();

            }

        });



    }









    update(){



        for(let i=this.bossAttacks.length-1;i>=0;i--){


    let attack=this.bossAttacks[i];


    attack.x+=attack.velocity.x;

    attack.y+=attack.velocity.y;



    if(

        Phaser.Geom.Intersects.RectangleToRectangle(

            attack.getBounds(),

            this.player.bounds

        )

    ){


        attack.destroy();

        this.bossAttacks.splice(i,1);


        this.health--;


        this.ui.updateHealth(

            this.health

        );


        continue;


    }




    if(attack.y>750){


        attack.destroy();


        this.bossAttacks.splice(i,1);


    }


}


        if(this.dead){


            if(

                Phaser.Input.Keyboard.JustDown(
                    this.restart
                )

            )

                this.scene.restart();



            return;


        }






        for(let cloud of this.clouds){


            cloud.x+=cloud.speed;


            if(cloud.x>1350)

                cloud.x=-50;


        }






        this.player.update();








        if(

            Phaser.Input.Keyboard.JustDown(

                this.player.space

            )

        ){


            this.bullets.push(

                new Bullet(

                    this,

                    this.player.x,

                    this.player.y-40

                )

            );


        }







        for(let i=this.bullets.length-1;i>=0;i--){


            if(!this.bullets[i].update()){


                this.bullets.splice(i,1);


            }


        }








        // BOSS UPDATE

        if(this.bossActive && this.boss){


            this.boss.update();


        }








        // ENEMIES

        for(let i=this.enemies.length-1;i>=0;i--){


            let enemy=this.enemies[i];



            if(!enemy.update()){


                enemy.destroy();


                this.enemies.splice(i,1);



                this.health--;


                this.ui.updateHealth(this.health);



            }


        }








        // POWERUPS

      // POWERUPS

for(let i=this.powerups.length-1;i>=0;i--){


    let p=this.powerups[i];



    if(!p.update()){


        p.destroy();

        this.powerups.splice(i,1);

        continue;


    }





    if(

        Phaser.Geom.Intersects.RectangleToRectangle(

            this.player.bounds,

            p.bounds

        )

    ){



        // Shield

        if(p.type===0){


            this.health=5;


        }





        // Energy

        if(p.type===1){


            this.player.speed=10;


            this.time.delayedCall(

                5000,

                ()=>{

                    this.player.speed=7;

                }

            );


        }






        // Repair

        if(p.type===2){


            this.health++;


            if(this.health>5)

                this.health=5;


        }






        this.ui.updateHealth(

            this.health

        );



        p.destroy();


        this.powerups.splice(i,1);



    }


}







        // BULLET COLLISION


        for(let b=this.bullets.length-1;b>=0;b--){



            let bullet=this.bullets[b];





            // BOSS HIT

            if(

                this.boss &&

                Phaser.Geom.Intersects.RectangleToRectangle(

                    bullet.bounds,

                    this.boss.bounds

                )

            ){


                bullet.destroy();

                this.bullets.splice(b,1);



                if(this.boss.takeDamage()){


    let x=this.boss.body.x;

    let y=this.boss.body.y;



    this.createExplosion(

        x,

        y

    );



    this.boss.destroy();



    this.boss=null;


    this.bossActive=false;


    this.bossDefeated=true;



    this.score+=500;



    this.ui.updateScore(

        this.score

    );



    this.createScorePopup(

        x,

        y

    );


}


                continue;


            }









            for(let e=this.enemies.length-1;e>=0;e--){



                let enemy=this.enemies[e];



                if(

                    Phaser.Geom.Intersects.RectangleToRectangle(

                        bullet.bounds,

                        enemy.bounds

                    )

                ){



                    bullet.destroy();


                    this.bullets.splice(b,1);



if(enemy.takeDamage()){


    let x=enemy.sprite.x;

    let y=enemy.sprite.y;



    enemy.destroy();


    this.enemies.splice(e,1);



    this.score+=10;



    this.ui.updateScore(

        this.score

    );



    this.createExplosion(

        x,

        y

    );


    this.createScorePopup(

        x,

        y

    );




    // RANDOM POWERUP DROP

    if(

        Phaser.Math.Between(1,5)===1

    ){


        this.powerups.push(

            new PowerUp(

                this,

                x,

                y

            )

        );


    }




                        this.createExplosion(x,y);




                        if(

                            Phaser.Math.Between(1,5)===1

                        ){


                            this.powerups.push(

                                new PowerUp(

                                    this,

                                    x,

                                    y

                                )

                            );


                        }



                    }


                    break;


                }


            }


        }








        // START BOSS

       if(

    this.score>=500 &&

    !this.bossActive &&

    !this.boss &&

    !this.bossDefeated

){

    this.spawnBoss();

}






        if(this.health<=0){


            this.gameOver();


        }



    }


    createScorePopup(x,y){


    let text=this.add.text(

        x-40,

        y,

        "+10 Eco Points",

        {

            fontSize:"20px",

            color:"#00ff66",

            stroke:"#000000",

            strokeThickness:3

        }

    );



    this.tweens.add({

        targets:text,

        y:y-50,

        alpha:0,

        duration:700,

        onComplete:()=>{

            text.destroy();

        }

    });


}

    gameOver(){


        this.dead=true;


        this.ui.gameOver(

            this.score

        );


    }



}