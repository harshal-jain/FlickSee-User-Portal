import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {


  // Testimonial Carousel
  testimonial = [{
    image: 'assets/images/harshal.jpeg',
    name: 'Harshal Jain',
    designation: 'Developer',
    description: 'Computer Science Engineer by Profession and a Developer by Passion. Harshal is a tech blogger, motivator, Problem Solver and a technology enthusiast.',
  }, {
    image: 'assets/images/kanishk.jpeg',
    name: 'Kanishk Goyal',
    designation: 'Designer',
    description: 'Kanishk is a software development engineer. He design this whole website and he is the ceo of maitrii finance.',
  }, {
    image: 'assets/images/priyanshi.jpeg',
    name: 'Priyanshi Jain',
    designation: 'Content Writer',
    description: 'Priyanshi is a content writer. She done spelization in content writing from university of Newyork. She completed MS from US.',
  },
  {
    image: 'assets/images/devanshi.jpeg',
    name: 'Devanshi Jain',
    designation: 'Graphic Designerr',
    description: 'Devanshi is a graphic designer. She completed bachelor in arts from university of california. She completed master from university of canada.  ',
  }];


  // Teastimonial Slick slider config
  testimonialSliderConfig = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Team 
  team = [{
    image: 'assets/images/team/harshal.jpeg',
    name: 'Harshal Jain',
    designation: 'Founder of FlickSee'
  }, {
    image: 'assets/images/team/kanishk.jpeg',
    name: 'Kanishk Goyal',
    designation: 'Co - Founder of FlickSee'
  }, {
    image: 'assets/images/team/priyanshi.jpeg',
    name: 'Priyanshi Jain',
    designation: 'Director of FlickSee'
  }, {
    image: 'assets/images/team/devanshi.jpeg',
    name: 'Devanshi Jain',
    designation: 'CEO of FlickSee'
  }];

  // Team Slick slider config
  teamSliderConfig = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
