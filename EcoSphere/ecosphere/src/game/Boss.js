import Phaser from "phaser";


export default class Boss {


    constructor(scene){


        this.scene=scene;


        this.hp=100;

        this.maxHP=100;


        this.speed=1;


        this.attackTimer=0;





        this.body=scene.add.rectangle(

            640,

            -100,

            180,

            140,

            0x222222

        );





        this.stack1=scene.add.rectangle(

            590,

            -180,

            35,

            90,

            0x111111

        );


        this.stack2=scene.add.rectangle(

            690,

            -180,

            35,

            90,

            0x111111

        );





        this.label=scene.add.text(

            555,

            -130,

            "FACTORY",

            {

                fontSize:"28px",

                color:"#ff3333",

                stroke:"#000000",

                strokeThickness:4

            }

        );





        this.parts=[

            this.body,

            this.stack1,

            this.stack2,

            this.label

        ];






        this.healthBG=scene.add.rectangle(

            640,

            90,

            300,

            20,

            0xff0000

        );



        this.healthBar=scene.add.rectangle(

            640,

            90,

            300,

            20,

            0x00ff00

        );



        this.y=-100;


    }









    update(){


        if(this.y<200){


            this.y+=this.speed;


            for(let part of this.parts){

                part.y+=this.speed;

            }


        }




        // BOSS ATTACK TIMER

        this.attackTimer++;



        if(this.attackTimer>120){


            this.attack();


            this.attackTimer=0;


        }




        // Smoke effect

        if(

            Phaser.Math.Between(1,5)===1

        ){


            let smoke=this.scene.add.circle(

                this.body.x,

                this.body.y-80,

                15,

                0x555555,

                0.5

            );


            this.scene.tweens.add({

                targets:smoke,

                y:smoke.y-80,

                alpha:0,

                duration:1000,

                onComplete:()=>{

                    smoke.destroy();

                }

            });


        }


    }







attack(){


    let type=Phaser.Math.Between(0,1);



    // Target player's current position
    // when the attack begins

    let targetX=this.scene.player.x;

    let targetY=this.scene.player.y;



    let attack;



    if(type===0){


        // Pollution cloud

        attack=this.scene.add.circle(

            this.body.x,

            this.body.y+80,

            25,

            0x555555

        );


    }

    else{


        // Oil barrel projectile

        attack=this.scene.add.rectangle(

            this.body.x,

            this.body.y+80,

            30,

            40,

            0x111111

        );


    }






    attack.speed=5;




    let angle=Phaser.Math.Angle.Between(

        attack.x,

        attack.y,

        targetX,

        targetY

    );




    attack.velocity={

        x:Math.cos(angle)*attack.speed,

        y:Math.sin(angle)*attack.speed

    };






    if(!this.scene.bossAttacks)

        this.scene.bossAttacks=[];




    this.scene.bossAttacks.push(

        attack

    );


}

        








    takeDamage(){


        this.hp--;



        this.healthBar.width=

        (this.hp/this.maxHP)*300;




        this.body.setFillStyle(

            0xff5500

        );



        this.scene.time.delayedCall(

            100,

            ()=>{

                this.body.setFillStyle(

                    0x222222

                );

            }

        );




        return this.hp<=0;


    }








    destroy(){


        for(let part of this.parts){

            part.destroy();

        }


        this.healthBG.destroy();

        this.healthBar.destroy();


    }







    get bounds(){


        return this.body.getBounds();


    }


}