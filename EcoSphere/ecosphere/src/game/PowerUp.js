export default class PowerUp {


    constructor(scene,x,y){


        this.scene=scene;



        this.type=Math.floor(

            Math.random()*3

        );





        let data=[


            // ECO SHIELD

            {

                color:0x00ff66,

                icon:"🛡",

                name:"Shield"

            },



            // ENERGY BOOST

            {

                color:0xffff00,

                icon:"⚡",

                name:"Energy"

            },



            // PLANET REPAIR

            {

                color:0x00ffff,

                icon:"🌍",

                name:"Repair"

            }



        ][this.type];








        this.sprite=scene.add.circle(

            x,

            y,

            20,

            data.color

        );







        this.icon=scene.add.text(

            x-14,

            y-15,

            data.icon,

            {

                fontSize:"26px"

            }

        );





        this.nameText=scene.add.text(

            x-35,

            y+25,

            data.name,

            {

                fontSize:"14px",

                color:"#ffffff",

                stroke:"#000000",

                strokeThickness:2

            }

        );






        this.speed=2;



        // glow animation

        scene.tweens.add({

            targets:this.sprite,

            scale:1.3,

            alpha:0.5,

            duration:500,

            yoyo:true,

            repeat:-1

        });



    }







    update(){



        this.sprite.y+=this.speed;


        this.icon.y+=this.speed;


        this.nameText.y+=this.speed;



        return this.sprite.y<750;


    }







    destroy(){


        this.sprite.destroy();


        this.icon.destroy();


        this.nameText.destroy();


    }







    get bounds(){


        return this.sprite.getBounds();


    }



}