import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  constructor() {}

  getAboutMeText() {
    return `Hi, I'm Melvina
           I am a graduate in Software and Web Development and am looking for
            job opportunity in Software Development. I am a good team player.
            problem solver and I like new challenges.
            I would love to expend my current skills and learn new skills.`;
  }
  getProfileImg() {
    return 'assets/images/img_photo.jpeg';
  }
  getQCADesc() {
    return `I was in a team of four for this project that I did 
       for my final paper for my course.    
      The app was for the Da Vinci's Workshop company, the app was 
      designed to help the user solve their problems, relieve their stress 
       and achieve their goals`;
  }

  getQCALearned() {
    const array = [
      'Firebase Authentication\n',
      'Cloud Storage \n',
      'Read and Write data to Firebase \n',
      'Coordination with team \n',
      'Professional Ethics \n',
      'Dealing with client requirements that keeps on changing \n',
      'Meeting deadlines \n',
    ];

    return array.map((items) => {
      return items;
    });
  }

  getADASDesc() {
    return `I was in a team of six for this project, this app was designed 
            to help the assessor to eliminate the need for paper management system.
            The app has 20 unstructured questions used in assessing Alzheimer’s Disease.`;
  }
  getADASLearned() {
    const array = [
      'Firebase Authentication and data management with Firebase SDK \n',
      'Places API \n',
      'Speech-To-Text API \n',
      'Coordination with team \n',
      'Github \n',
    ];

    return array.map((items) => {
      return items;
    });
  }

  getWeatherDecs() {
    return `A weathers website that intakes a conutries name and shows the weather of 
    that conutry, I have used Open Weather Map API to fetch weather data`;
  }

  getWeatherUsed() {
    const array = [
      'HTML \n',
      'CSS \n',
      'REACT'
    ];
    return array.map((items) => {
      return items
    })
  }
}
