const person={
    name: 'Goran',
    address: {
        line1: 'Ruzha Delcheva 30',
        city: 'Bitola',
        country: 'Macedonia',
    },
    profiles: ['twitter', 'ln', 'instagram'],
    printProfile: () =>{
        person.profiles.map(
            profile => console.log(profile)
        )
        
        }
}


export default function LearningJavaScript(){

    return (
            <div>
              <div>{person.name}</div>  
              <div>{person.address.line1}</div> 
              <div>{person.address.city}</div> 
              <div>{person.profiles[0]}</div> 
              <div>{person.printProfile( )}</div>
            </div>
    );

}