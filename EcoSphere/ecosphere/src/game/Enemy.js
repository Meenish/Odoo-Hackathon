import Phaser from "phaser";


export default class Enemy {


    constructor(scene){


        this.scene=scene;


        this.type=Phaser.Math.Between(0,3);


        this.parts=[];

        this.particles=[];



        let data=[

            {
                hp:1,
                speed:1
            },

            {
                hp:1,
                speed:1.8
            },

            {
                hp:2,
                speed:1.8
            },

            {
                hp:3,
                speed:1.2
            }

        ][this.type];



        this.hp=data.hp;

        this.speed=data.speed;



        if(this.type===0)

            this.createCloud();



        if(this.type===1)

            this.createPlastic();



        if(this.type===2)

            this.createBarrel();



        if(this.type===3)

            this.createToxic();



    }







    randomPosition(){


        return {

            x:Phaser.Math.Between(50,1230),

            y:-50

        };


    }







    createCloud(){


        let p=this.randomPosition();


        this.x=p.x;

        this.y=p.y;



        let c1=this.scene.add.circle(

            this.x-30,

            this.y,

            25,

            0x555555

        );


        let c2=this.scene.add.circle(

            this.x,

            this.y-15,

            35,

            0x666666

        );


        let c3=this.scene.add.circle(

            this.x+35,

            this.y,

            25,

            0x555555

        );



        this.parts.push(

            c1,

            c2,

            c3

        );



        this.main=c2;



        // FIXED CLOUD HITBOX

        this.hitbox=this.scene.add.rectangle(

            this.x,

            this.y,

            100,

            70,

            0x000000,

            0

        );



    }







    createPlastic(){


        let p=this.randomPosition();


        this.x=p.x;

        this.y=p.y;



        this.main=this.scene.add.rectangle(

            this.x,

            this.y,

            35,

            45,

            0xffffff

        );



        this.parts.push(

            this.main

        );


        this.hitbox=this.main;


    }








    createBarrel(){


        let p=this.randomPosition();


        this.x=p.x;

        this.y=p.y;



        this.main=this.scene.add.rectangle(

            this.x,

            this.y,

            50,

            60,

            0x111111

        );



        this.label=this.scene.add.text(

            this.x-18,

            this.y-15,

            "OIL",

            {

                fontSize:"16px",

                color:"#ff9900"

            }

        );



        this.parts.push(

            this.main,

            this.label

        );


        this.hitbox=this.main;


    }








    createToxic(){


        let p=this.randomPosition();


        this.x=p.x;

        this.y=p.y;



        this.main=this.scene.add.rectangle(

            this.x,

            this.y,

            45,

            55,

            0xaa00ff

        );



        this.symbol=this.scene.add.text(

            this.x-15,

            this.y-15,

            "☢",

            {

                fontSize:"25px",

                color:"#00ff00"

            }

        );



        this.parts.push(

            this.main,

            this.symbol

        );



        this.hitbox=this.main;


    }








    update(){



        this.y+=this.speed;



        for(let part of this.parts){

            part.y+=this.speed;

        }



        if(this.hitbox){

            this.hitbox.y=this.y;

            this.hitbox.x=this.x;

        }






        // CLOUD PARTICLES

        if(

            this.type===0 &&

            Phaser.Math.Between(1,4)===1

        ){


            this.createParticle(

                this.x,

                this.y,

                0x444444

            );


        }






        // OIL DROPS

        if(

            this.type===2 &&

            Phaser.Math.Between(1,5)===1

        ){


            this.createParticle(

                this.x,

                this.y+30,

                0x000000

            );


        }







        // TOXIC PARTICLES

        if(

            this.type===3 &&

            Phaser.Math.Between(1,5)===1

        ){


            this.createParticle(

                this.x,

                this.y,

                0x00ff00

            );


        }






        if(this.type===1){


            let move=Math.sin(this.y/25)*3;


            for(let part of this.parts)

                part.x+=move;


            this.x+=move;


        }







        if(this.type===2){


            this.main.rotation+=0.03;


            if(this.label)

                this.label.rotation+=0.03;


        }







        return this.y<750;


    }








    createParticle(x,y,color){


        let p=this.scene.add.circle(

            x,

            y,

            5,

            color

        );


        this.particles.push(p);



        this.scene.tweens.add({

            targets:p,

            y:y+40,

            alpha:0,

            duration:600,

            onComplete:()=>{

                p.destroy();

            }

        });


    }








    takeDamage(){


        this.hp--;


        this.main.setAlpha(0.5);



        this.scene.time.delayedCall(

            100,

            ()=>{

                this.main.setAlpha(1);

            }

        );



        return this.hp<=0;


    }








    destroy(){


        for(let p of this.parts)

            p.destroy();



        for(let p of this.particles)

            p.destroy();


        if(this.hitbox!==this.main)

            this.hitbox.destroy();



    }







    get bounds(){


        return this.hitbox.getBounds();


    }







    get sprite(){


        return this.main;


    }



}