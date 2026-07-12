import Phaser from "phaser";


export default class Player {


    constructor(scene){


        this.scene=scene;



        // ECO DRONE BODY

        this.body = scene.add.rectangle(

            640,
            650,

            45,
            35,

            0x00aa55

        );



        // Solar panels

        this.leftPanel = scene.add.rectangle(

            615,
            650,

            20,
            30,

            0x00ffff

        );


        this.rightPanel = scene.add.rectangle(

            665,
            650,

            20,
            30,

            0x00ffff

        );



        // Drone core glow

        this.core = scene.add.circle(

            640,
            650,

            10,

            0xffffff

        );



        // Engine glow

        this.engine = scene.add.circle(

            640,
            680,

            8,

            0x00ff66

        );



        // Animate engine

        scene.tweens.add({

            targets:this.engine,

            scale:1.8,

            alpha:0.4,

            duration:300,

            yoyo:true,

            repeat:-1

        });






        this.speed=7;



        this.keys=scene.input.keyboard.createCursorKeys();



        this.space=scene.input.keyboard.addKey(

            Phaser.Input.Keyboard.KeyCodes.SPACE

        );


    }







    update(){



        let movement=0;



        if(this.keys.left.isDown)

            movement=-this.speed;



        if(this.keys.right.isDown)

            movement=this.speed;





        this.body.x+=movement;

        this.leftPanel.x+=movement;

        this.rightPanel.x+=movement;

        this.core.x+=movement;

        this.engine.x+=movement;






        this.body.x=Phaser.Math.Clamp(

            this.body.x,

            40,

            1240

        );



        // keep parts aligned

        this.leftPanel.x=this.body.x-25;

        this.rightPanel.x=this.body.x+25;

        this.core.x=this.body.x;

        this.engine.x=this.body.x;



    }







    shoot(){


        return {

            x:this.body.x,

            y:this.body.y-40

        };


    }







    get x(){


        return this.body.x;


    }






    get y(){


        return this.body.y;


    }






    get bounds(){


        return this.body.getBounds();


    }



}