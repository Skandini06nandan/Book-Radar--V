class Form{
constructor(){
    //1st screen to be displayed
    this.input =createInput();
    this.button =createButton('Submit');
  
    this.greeting =createElement('h2');
this.title =createElement('h2')
}
display(){
this.title.html("Welcome to the Book Radar");
this.title.position(100,10);

this.button.position(470,210);
this.input.position(300,210);
 
this.greeting.html("Enter your name");
this.greeting.position(300,130);
//when user clicks the submit button
this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
this.greeting.hide();
this.input.name =this.input.value();

});

/*async function timezone(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0200 && hour<=1100){
        this.greeting = "Good Morning"+ this.input.value();
    }
    else if(hour>=1200 && hour <= 0300){
       this. greeting = "Good Evening" + this.input.value();
    }
    else if(hour>= 0400 && hour <= 0900){
      this.greeting = "Good Afternoon" + this.input.value();
    }

}*/
}}