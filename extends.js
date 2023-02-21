class TechMember {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback!!`);
    }
}

class Instructor extends TechMember {
    designation = 'instructor';
    team = 'web team';
   

    constructor(name, location){
        super(name, location);
    }

    supportSession (time){
        console.log(`start support session ${time}`);
    }
    startQuiz (module){
    
        console.log(`start quiz ${module}`);
    }
}

class Developer extends TechMember {

    designation = 'instructor';
    team = 'web team';
    tech;

    constructor(name, location, tech){
       super(name, location);
       this.tech = tech;
    }

    developFeature (feature){
        console.log(`Please develop the ${feature}`);
    }
    release (version){
        
        console.log(`Please release the ${version}`);
    }
}


class JobPlacement extends TechMember {

    designation = 'job placement commandos';
    team = 'web team';
    region;

    constructor(name, location, region){
       super(name, location);
       this.region = region;
    }

    provideResume (resume){
        console.log(`Please develop the ${resume}`);
    }
    prepareStudent(prepare){
        
        console.log(`Please prepare the ${prepare}`);
    }
}

const aliaBhat = new Developer('Alia Bhat', 'Dhaka', 'React');
console.log(aliaBhat);

aliaBhat.provideFeedback();

const purnima = new JobPlacement('Purnima', 'Mymensingh', 'south zone');
console.log(purnima);

purnima.prepareStudent('Ronobir');
