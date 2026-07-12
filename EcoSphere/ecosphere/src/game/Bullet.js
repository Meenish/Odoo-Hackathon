export default class Bullet {


    constructor(scene,x,y){


        this.scene = scene;



        this.sprite = scene.add.rectangle(

            x,
            y,
            12,
            35,
            0x00ff66

        );



        // Glow effect

        scene.tweens.add({

            targets:this.sprite,

            alpha:0.4,

            duration:200,

            yoyo:true,

            repeat:-1

        });



        this.speed = 10;


    }






    update(){


        this.sprite.y -= this.speed;



        if(this.sprite.y < 0){


            this.destroy();


            return false;


        }



        return true;


    }






    destroy(){


        this.sprite.destroy();


    }






    get bounds(){


        return this.sprite.getBounds();


    }



}