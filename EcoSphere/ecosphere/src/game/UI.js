export default class UI {


    constructor(scene){


        this.scene = scene;



        this.scoreText = scene.add.text(

            30,
            25,

            "Eco Points: 0",

            {

                fontSize:"32px",

                color:"#ffffff",

                stroke:"#00ff66",

                strokeThickness:4

            }

        );





        this.healthText = scene.add.text(

            950,
            25,

            "Planet ❤️❤️❤️❤️❤️",

            {

                fontSize:"28px",

                color:"#ffffff",

                stroke:"#00ff66",

                strokeThickness:4

            }

        );


    }







    updateScore(score){


        this.scoreText.setText(

            "Eco Points: " + score

        );


    }







    updateHealth(health){


        let hearts="";


        for(let i=0;i<health;i++){


            hearts+="❤️";


        }




        this.healthText.setText(

            "Planet " + hearts

        );



    }








    gameOver(score){



        this.scene.add.rectangle(

            640,
            360,

            600,
            300,

            0x000000,

            0.85

        );







        this.scene.add.text(

            390,
            260,

            "EARTH LOST",

            {

                fontSize:"50px",

                color:"#ff3333",

                stroke:"#ffffff",

                strokeThickness:3

            }

        );







        this.scene.add.text(

            400,
            350,

            "Eco Points: " + score,

            {

                fontSize:"32px",

                color:"#ffffff",

                stroke:"#00ff66",

                strokeThickness:3

            }

        );








        this.scene.add.text(

            450,
            420,

            "Press R",

            {

                fontSize:"30px",

                color:"#00ff66"

            }

        );



    }



}