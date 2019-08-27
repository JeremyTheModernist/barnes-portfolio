import React from 'react';

const {Provider, Consumer} = React.createContext();

class AppState extends React.Component{
  state = {
    fullscreen:false,
    about:false,
    selected: {
      src: null,
      title: null,
      description:null
    },
    projects:[
      {
        id:'tres solutions',
        name:'Tres Vessel Analytics',
        disciplines:['Disciplines','Identity','Responsive Web Design','Branding','Content Strategy'],
        challenge:"Tres Solutions is a data analytics company supplying insightful metrics and feedback to vessel industries world wide. When Tres approached me, they we’re looking for a complete web redesign. The challenge was not only to create a brand image that differentiated Tres from their competitors, but more importantly, to create a visual and verbal language that would build trust with potential customers and communicate the value of Tres.",
        solution:"My first step with Tres was to understand the unique value propositions of their company, and perform a competitive analysis. From there, I built a series of moodboards and initial design directions oriented around my findings. These initial directions would go onto define the larger rebrand and site architecture for Tres. The result was a comprehensive website detailing the unique offerings of Tres’ product and the value they offer customers.",
        breakdowns: [
          {
            id:1,
            columnOne: 'Tres Solutions was one of those rare, but powerful combinations of client and designer goals. At every turn of the project we found ourselves holding content, user experience, and visual communication in equal tension to ensure the success of the project.',
            columnTwo: 'As with all really great processes, the design continued to reveal new directions that we could take with imagery, color, and layout. The final result was a powerful combination of precise imagery and clear communication.'
          },
          {
            id:2,
            columnOne: 'As a part of my process with Tres Solutions, I explored a range of visual collateral and identity pieces. The above mocks showcase some of the original splash screens and logos that came out of this exploration. Ultimately, Tres Solutions kept their established logo for it’s visual recognition with existing customers.',
            columnTwo: 'Systems are the foundation of strong, scalable, and cohesive visual identities. So, as the website design unfolded, I distilled and catalogued a concise set of design parameters. This ensured the integrity of the system and that Tres’ new voice was consistently on target for their customers and onboarding users.'
          }
        ]
      },
      {
        id:'cohesion',
        name:'Microsoft Cohesion Team',
        disciplines:['Disciplines','Identity','Responsive Web Design','Branding','Content Strategy'],
        challenge:"Tres Solutions is a data analytics company supplying insightful metrics and feedback to vessel industries world wide. When Tres approached me, they we’re looking for a complete web redesign. The challenge was not only to create a brand image that differentiated Tres from their competitors, but more importantly, to create a visual and verbal language that would build trust with potential customers and communicate the value of Tres.",
        solution:"My first step with Tres was to understand the unique value propositions of their company, and perform a competitive analysis. From there, I built a series of moodboards and initial design directions oriented around my findings. These initial directions would go onto define the larger rebrand and site architecture for Tres. The result was a comprehensive website detailing the unique offerings of Tres’ product and the value they offer customers.",
        breakdowns: [
          {
            id:1,
            columnOne: 'Tres Solutions was one of those rare, but powerful combinations of client and designer goals. At every turn of the project we found ourselves holding content, user experience, and visual communication in equal tension to ensure the success of the project.',
            columnTwo: 'As with all really great processes, the design continued to reveal new directions that we could take with imagery, color, and layout. The final result was a powerful combination of precise imagery and clear communication.'
          },
          {
            id:2,
            columnOne: 'As a part of my process with Tres Solutions, I explored a range of visual collateral and identity pieces. The above mocks showcase some of the original splash screens and logos that came out of this exploration. Ultimately, Tres Solutions kept their established logo for it’s visual recognition with existing customers.',
            columnTwo: 'Systems are the foundation of strong, scalable, and cohesive visual identities. So, as the website design unfolded, I distilled and catalogued a concise set of design parameters. This ensured the integrity of the system and that Tres’ new voice was consistently on target for their customers and onboarding users.'
          }
        ]
      },
      {
        id:'fluent',
        name:'Microsoft Fluent',
        disciplines:['Disciplines','Identity','Responsive Web Design','Branding','Content Strategy'],
        challenge:"Tres Solutions is a data analytics company supplying insightful metrics and feedback to vessel industries world wide. When Tres approached me, they we’re looking for a complete web redesign. The challenge was not only to create a brand image that differentiated Tres from their competitors, but more importantly, to create a visual and verbal language that would build trust with potential customers and communicate the value of Tres.",
        solution:"My first step with Tres was to understand the unique value propositions of their company, and perform a competitive analysis. From there, I built a series of moodboards and initial design directions oriented around my findings. These initial directions would go onto define the larger rebrand and site architecture for Tres. The result was a comprehensive website detailing the unique offerings of Tres’ product and the value they offer customers.",
        breakdowns: [
          {
            id:1,
            columnOne: 'Tres Solutions was one of those rare, but powerful combinations of client and designer goals. At every turn of the project we found ourselves holding content, user experience, and visual communication in equal tension to ensure the success of the project.',
            columnTwo: 'As with all really great processes, the design continued to reveal new directions that we could take with imagery, color, and layout. The final result was a powerful combination of precise imagery and clear communication.'
          },
          {
            id:2,
            columnOne: 'As a part of my process with Tres Solutions, I explored a range of visual collateral and identity pieces. The above mocks showcase some of the original splash screens and logos that came out of this exploration. Ultimately, Tres Solutions kept their established logo for it’s visual recognition with existing customers.',
            columnTwo: 'Systems are the foundation of strong, scalable, and cohesive visual identities. So, as the website design unfolded, I distilled and catalogued a concise set of design parameters. This ensured the integrity of the system and that Tres’ new voice was consistently on target for their customers and onboarding users.'
          }
        ]
      },
      {
        id:'dynamics',
        name:'D365 Design Language',
        disciplines:['Disciplines','Identity','Responsive Web Design','Branding','Content Strategy'],
        challenge:"Tres Solutions is a data analytics company supplying insightful metrics and feedback to vessel industries world wide. When Tres approached me, they we’re looking for a complete web redesign. The challenge was not only to create a brand image that differentiated Tres from their competitors, but more importantly, to create a visual and verbal language that would build trust with potential customers and communicate the value of Tres.",
        solution:"My first step with Tres was to understand the unique value propositions of their company, and perform a competitive analysis. From there, I built a series of moodboards and initial design directions oriented around my findings. These initial directions would go onto define the larger rebrand and site architecture for Tres. The result was a comprehensive website detailing the unique offerings of Tres’ product and the value they offer customers.",
        breakdowns: [
          {
            id:1,
            columnOne: 'Tres Solutions was one of those rare, but powerful combinations of client and designer goals. At every turn of the project we found ourselves holding content, user experience, and visual communication in equal tension to ensure the success of the project.',
            columnTwo: 'As with all really great processes, the design continued to reveal new directions that we could take with imagery, color, and layout. The final result was a powerful combination of precise imagery and clear communication.'
          },
          {
            id:2,
            columnOne: 'As a part of my process with Tres Solutions, I explored a range of visual collateral and identity pieces. The above mocks showcase some of the original splash screens and logos that came out of this exploration. Ultimately, Tres Solutions kept their established logo for it’s visual recognition with existing customers.',
            columnTwo: 'Systems are the foundation of strong, scalable, and cohesive visual identities. So, as the website design unfolded, I distilled and catalogued a concise set of design parameters. This ensured the integrity of the system and that Tres’ new voice was consistently on target for their customers and onboarding users.'
          }
        ]
      },
    ],
    information: [
      {
        id:1,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565901474/barnes-portfolio/00_Tres-Laptop_gqdxwi.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565901474/barnes-portfolio/00_Tres-Laptop_gqdxwi.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/q_30/v1565901474/barnes-portfolio/00_Tres-Laptop_gqdxwi.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/q_30/v1565901474/barnes-portfolio/00_Tres-Laptop_gqdxwi.jpg',
          }
        }
      },
      {
        id:2,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_42/v1565900665/barnes-portfolio/09_Tres-Home_o4ffxe.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_42/v1565900665/barnes-portfolio/09_Tres-Home_o4ffxe.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900665/barnes-portfolio/09_Tres-Home_o4ffxe.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900665/barnes-portfolio/09_Tres-Home_o4ffxe.jpg',
          }
        }
      },
      {
        id:3,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900719/barnes-portfolio/15_Tres-Careers-Tablet_dsmoao.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900719/barnes-portfolio/15_Tres-Careers-Tablet_dsmoao.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900719/barnes-portfolio/15_Tres-Careers-Tablet_dsmoao.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900719/barnes-portfolio/15_Tres-Careers-Tablet_dsmoao.jpg',
          }
        }
      },
      {
        id:4,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900733/barnes-portfolio/28_Tres-Home-Mobile_hityij.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900733/barnes-portfolio/28_Tres-Home-Mobile_hityij.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900733/barnes-portfolio/28_Tres-Home-Mobile_hityij.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900733/barnes-portfolio/28_Tres-Home-Mobile_hityij.jpg',
          }
        }
      },
      {
        id:5,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_1600,q_40/v1565900761/barnes-portfolio/16_Tres-Careers-Tablet_aa6zgr.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_1600,q_40/v1565900761/barnes-portfolio/16_Tres-Careers-Tablet_aa6zgr.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900761/barnes-portfolio/16_Tres-Careers-Tablet_aa6zgr.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900761/barnes-portfolio/16_Tres-Careers-Tablet_aa6zgr.jpg',
          }
        }
      },
      {
        id:6,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
          }
        }
      },
      {
        id:7,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_55/v1565900794/barnes-portfolio/02_Tres-Careers_gve7kq.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_55/v1565900794/barnes-portfolio/02_Tres-Careers_gve7kq.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900794/barnes-portfolio/02_Tres-Careers_gve7kq.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900794/barnes-portfolio/02_Tres-Careers_gve7kq.jpg',
          }
        }
      },
      {
        id:8,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_35/v1565900808/barnes-portfolio/18_Tres-News-Tablet_s78rmg.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_35/v1565900808/barnes-portfolio/18_Tres-News-Tablet_s78rmg.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900808/barnes-portfolio/18_Tres-News-Tablet_s78rmg.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900808/barnes-portfolio/18_Tres-News-Tablet_s78rmg.jpg',
          }
        }
      },
      {
        id:9,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900820/barnes-portfolio/45-Tres-Product-Tablet_dogume.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900820/barnes-portfolio/45-Tres-Product-Tablet_dogume.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900820/barnes-portfolio/45-Tres-Product-Tablet_dogume.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900820/barnes-portfolio/45-Tres-Product-Tablet_dogume.jpg',
          }
        }
      },
      {
        id:10,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900831/barnes-portfolio/40-Tres-Product-Desktop_kofzxd.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900831/barnes-portfolio/40-Tres-Product-Desktop_kofzxd.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_355/v1565900831/barnes-portfolio/40-Tres-Product-Desktop_kofzxd.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900831/barnes-portfolio/40-Tres-Product-Desktop_kofzxd.jpg',
          }
        }
      },
      {
        id:11,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565912561/barnes-portfolio/36_Tres-Support-Desktop_srnzko.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565912561/barnes-portfolio/36_Tres-Support-Desktop_srnzko.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_355/v1565912561/barnes-portfolio/36_Tres-Support-Desktop_srnzko.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565912561/barnes-portfolio/36_Tres-Support-Desktop_srnzko.jpg',
          }
        }
      },
      {
        id:12,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900857/barnes-portfolio/06_Tres-News_nft0rz.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900857/barnes-portfolio/06_Tres-News_nft0rz.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900857/barnes-portfolio/06_Tres-News_nft0rz.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35//v1565900857/barnes-portfolio/06_Tres-News_nft0rz.jpg',
          }
        }
      },
      {
        id:13,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900869/barnes-portfolio/31_Tres-Home-Mobile_omrqli.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900869/barnes-portfolio/31_Tres-Home-Mobile_omrqli.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900869/barnes-portfolio/31_Tres-Home-Mobile_omrqli.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900869/barnes-portfolio/31_Tres-Home-Mobile_omrqli.jpg',
          }
        }
      },
      {
        id:14,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900887/barnes-portfolio/26_Tres-Logos_e1vifb.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900887/barnes-portfolio/26_Tres-Logos_e1vifb.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900887/barnes-portfolio/26_Tres-Logos_e1vifb.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900887/barnes-portfolio/26_Tres-Logos_e1vifb.jpg',
          }
        }
      },
      {
        id:15,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900881/barnes-portfolio/27_Tres-Logos_i5wxh6.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900881/barnes-portfolio/27_Tres-Logos_i5wxh6.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900881/barnes-portfolio/27_Tres-Logos_i5wxh6.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900881/barnes-portfolio/27_Tres-Logos_i5wxh6.jpg',
          }
        }
      },
      {
        id:16,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_45/v1565900904/barnes-portfolio/46_Tres-System_lym6xh.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_45/v1565900904/barnes-portfolio/46_Tres-System_lym6xh.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900904/barnes-portfolio/46_Tres-System_lym6xh.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900904/barnes-portfolio/46_Tres-System_lym6xh.jpg',
          }
        }
      },
      {
        id:17,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900913/barnes-portfolio/25_Tres-Typeface_vgyz1d.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900913/barnes-portfolio/25_Tres-Typeface_vgyz1d.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900913/barnes-portfolio/25_Tres-Typeface_vgyz1d.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900913/barnes-portfolio/25_Tres-Typeface_vgyz1d.jpg',
          }
        }
      },
      {
        id:18,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_45/v1565900927/barnes-portfolio/13_Tres-toolkit_nolp0n.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_45/v1565900927/barnes-portfolio/13_Tres-toolkit_nolp0n.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/13_Tres-toolkit_nolp0n.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/13_Tres-toolkit_nolp0n.jpg',
          }
        }
      },
      {
        id:19,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/01_Tres-Careers_0_mcskz3.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/01_Tres-Careers_0_mcskz3.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/01_Tres-Careers_0_mcskz3.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/01_Tres-Careers_0_mcskz3.jpg',
          }
        }
      },
      {
        id:20,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_50/v1565900927/barnes-portfolio/47_Tres-Mockup_iijui7.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_50/v1565900927/barnes-portfolio/47_Tres-Mockup_iijui7.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/47_Tres-Mockup_iijui7.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/47_Tres-Mockup_iijui7.jpg',
          }
        }
      },
      {
        id:21,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_40/v1565900927/barnes-portfolio/48_Tres-Mockup_bxu6o3.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_40/v1565900927/barnes-portfolio/48_Tres-Mockup_bxu6o3.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/48_Tres-Mockup_bxu6o3.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/48_Tres-Mockup_bxu6o3.jpg',
          }
        }
      },

      {
        id:22,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_40/v1565900927/barnes-portfolio/14_Tres-Wireframes_0_cmglfi.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_40/v1565900927/barnes-portfolio/14_Tres-Wireframes_0_cmglfi.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/14_Tres-Wireframes_0_cmglfi.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/14_Tres-Wireframes_0_cmglfi.jpg',
          }
        }
      },
      {
        id:23,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/07_Cohesion-Logo-01_xxk5tc.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/07_Cohesion-Logo-01_xxk5tc.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/07_Cohesion-Logo-01_xxk5tc.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/07_Cohesion-Logo-01_xxk5tc.jpg',
          }
        }
      },
      {
        id:24,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/02_Cohesion-Shirt_s6olbc.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/02_Cohesion-Shirt_s6olbc.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/02_Cohesion-Shirt_s6olbc.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/02_Cohesion-Shirt_s6olbc.jpg',
          }
        }
      },
      {
        id:25,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_40/v1565900927/barnes-portfolio/03_Cohesion-Warehouse-B_cad7iu.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_40/v1565900927/barnes-portfolio/03_Cohesion-Warehouse-B_cad7iu.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/03_Cohesion-Warehouse-B_cad7iu.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/03_Cohesion-Warehouse-B_cad7iu.jpg',
          }
        }
      },
      {
        id:26,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_35/v1565900927/barnes-portfolio/04_Cohesion_Website_p7izsu.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_35/v1565900927/barnes-portfolio/04_Cohesion_Website_p7izsu.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Cohesion_Website_p7izsu.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Cohesion_Website_p7izsu.jpg',
          }
        }
      },
      {
        id:27,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1565900927/barnes-portfolio/06_Cohesion_Collateral_c0z1rq.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1565900927/barnes-portfolio/06_Cohesion_Collateral_c0z1rq.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1600,q_50/v1565900927/barnes-portfolio/06_Cohesion_Collateral_c0z1rq.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1600,q_50/v1565900927/barnes-portfolio/06_Cohesion_Collateral_c0z1rq.jpg',
          }
        }
      },
      {
        id:28,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1565900927/barnes-portfolio/05_Cohesion_Collateral_m2gv44.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_50/v1565900927/barnes-portfolio/05_Cohesion_Collateral_m2gv44.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1600,q_50/v1565900927/barnes-portfolio/05_Cohesion_Collateral_m2gv44.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1600,q_50/v1565900927/barnes-portfolio/05_Cohesion_Collateral_m2gv44.jpg',
          }
        }
      },
      {
        id:29,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/08_Cohesion-Logo-01_d9s6j3.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/08_Cohesion-Logo-01_d9s6j3.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/08_Cohesion-Logo-01_d9s6j3.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/08_Cohesion-Logo-01_d9s6j3.jpg',
          }
        }
      },
      {
        id:30,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/17_Cohesion-Grid_cyi9wg.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/17_Cohesion-Grid_cyi9wg.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/17_Cohesion-Grid_cyi9wg.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/17_Cohesion-Grid_cyi9wg.jpg',
          }
        }
      },
      {
        id:31,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/19_Cohesion-Grid_zmgngd.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/19_Cohesion-Grid_zmgngd.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/19_Cohesion-Grid_zmgngd.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/19_Cohesion-Grid_zmgngd.jpg',
          }
        }
      },
      {
        id:32,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/20_Cohesion-Grid-Mobile_uberae.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/20_Cohesion-Grid-Mobile_uberae.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/20_Cohesion-Grid-Mobile_uberae.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/20_Cohesion-Grid-Mobile_uberae.jpg',
          }
        }
      },
      {
        id:33,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/21_Cohesion-Grid-Tile_muts6f.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/21_Cohesion-Grid-Tile_muts6f.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/21_Cohesion-Grid-Tile_muts6f.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/21_Cohesion-Grid-Tile_muts6f.jpg',
          }
        }
      },
      {
        id:34,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1565900927/barnes-portfolio/22_Cohesion-Grid-Tile_sdp6fy.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/v1565900927/barnes-portfolio/22_Cohesion-Grid-Tile_sdp6fy.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/v1565900927/barnes-portfolio/22_Cohesion-Grid-Tile_sdp6fy.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/v1565900927/barnes-portfolio/22_Cohesion-Grid-Tile_sdp6fy.jpg',
          }
        }
      },
      {
        id:35,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/24_Cohesion-Grid-Applied-01_vnseex.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/24_Cohesion-Grid-Applied-01_vnseex.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/24_Cohesion-Grid-Applied-01_vnseex.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/24_Cohesion-Grid-Applied-01_vnseex.jpg',
          }
        }
      },
      {
        id:36,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/17_Cohesion-Grid_cyi9wg.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/23_Cohesion-Grid-Applied-01_ftnkkj.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/23_Cohesion-Grid-Applied-01_ftnkkj.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/23_Cohesion-Grid-Applied-01_ftnkkj.jpg',
          }
        }
      },
      {
        id:37,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/25_Cohesion-Grid-Applied-01-01_fynyud.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/25_Cohesion-Grid-Applied-01-01_fynyud.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/25_Cohesion-Grid-Applied-01-01_fynyud.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/25_Cohesion-Grid-Applied-01-01_fynyud.jpg',
          }
        }
      },
      {
        id:38,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_60/v1565900927/barnes-portfolio/26_Cohesion-Grid-Tiles_rd4qbc.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_60/v1565900927/barnes-portfolio/26_Cohesion-Grid-Tiles_rd4qbc.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/26_Cohesion-Grid-Tiles_rd4qbc.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/26_Cohesion-Grid-Tiles-mobile_obijqz.jpg',
          }
        }
      },
      {
        id:39,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_60/v1565900927/barnes-portfolio/08_FluentLogo_dne4tq.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_60/v1565900927/barnes-portfolio/08_FluentLogo_dne4tq.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/08_FluentLogo_dne4tq.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/08_FluentLogo_dne4tq.jpg',
          }
        }
      },
      {
        id:40,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_60/v1565900927/barnes-portfolio/09_FluentLogo_gkrtbi.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_2000,q_60/v1565900927/barnes-portfolio/09_FluentLogo_gkrtbi.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/09_FluentLogo_gkrtbi.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/09_FluentLogo_gkrtbi.jpg',
          }
        }
      },
      {
        id:41,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_60/v1565900927/barnes-portfolio/02_Fluent-VisualStudio_zczpzt.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_60/v1565900927/barnes-portfolio/02_Fluent-VisualStudio_zczpzt.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/02_Fluent-VisualStudio_zczpzt.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_60/v1566843659/barnes-portfolio/01_Fluent-VisualStudio-MobileB-01_ruqcbp.jpg',
          }
        }
      },
      {
        id:42,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566695570/barnes-portfolio/02_Fluent-Azure_onmtrp.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/v1566695570/barnes-portfolio/02_Fluent-Azure_onmtrp.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/v1566695570/barnes-portfolio/02_Fluent-Azure_onmtrp.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/v1566695570/barnes-portfolio/02_Fluent-Azure_onmtrp.jpg',
          }
        }
      },
      {
        id:43,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566695570/barnes-portfolio/02_Fluent-Azure-01_vdocdz.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566695570/barnes-portfolio/02_Fluent-Azure-01_vdocdz.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/v1566695570/barnes-portfolio/02_Fluent-Azure-Mobile_toeoyp.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566840265/barnes-portfolio/02_Fluent-Azure-Mobile-01_v4m8s6.jpg',
          }
        }
      },
      {
        id:44,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/00_Fluent-PowerBI_lopdon.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/00_Fluent-PowerBI_lopdon.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/00_Fluent-PowerBI-Mobile_cqgfss.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/00_Fluent-PowerBI-Mobile_cqgfss.jpg',
          }
        }
      },
      {
        id:45,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566698378/barnes-portfolio/04_Fluent-PBI-Icons_kqa9fk.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/04_Fluent-PBI-Icons_wlzwsb.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-Icons_wlzwsb.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-Icons_wlzwsb.jpg',
          }
        }
      },
      {
        id:46,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566698378/barnes-portfolio/04_Fluent-PBI-Typeface_chllhg.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/04_Fluent-PBI-Typeface_chllhg.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-Typeface_chllhg.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-Typeface_chllhg.jpg',
          }
        }
      },
      {
        id:47,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566698378/barnes-portfolio/05_Fluent-PowerApps_k8xrd8.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/05_Fluent-PowerApps_k8xrd8.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/05_Fluent-PowerApps-Mobile_sipnsr.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566844477/barnes-portfolio/05_Fluent-PowerApps-Mobile-01_gohysn.jpg',
          }
        }
      },
      {
        id:48,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566698378/barnes-portfolio/04_Fluent-PBI-PieGraph_qdkbke.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/04_Fluent-PBI-PieGraph_qdkbke.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-PieGraph_qdkbke.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-PieGraph_qdkbke.jpg',
          }
        }
      },
      {
        id:49,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566698378/barnes-portfolio/04_Fluent-PBI-CircleChart_prtdpn.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/04_Fluent-PBI-CircleChart_prtdpn.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-CircleChart_prtdpn.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/04_Fluent-PBI-CircleChart_prtdpn.jpg',
          }
        }
      },
      {
        id:50,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566698378/barnes-portfolio/07_Fluent_BuildingBlocks-01_medfkq.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/v1565900927/barnes-portfolio/07_Fluent_BuildingBlocks-01_medfkq.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1565900927/barnes-portfolio/07_Fluent_BuildingBlocks-01_medfkq.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1565900927/barnes-portfolio/07_Fluent_BuildingBlocks-01_medfkq.jpg',
          }
        }
      },
      {
        id:51,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566761469/barnes-portfolio/00_D365_Dashboard_auqyvb.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566761469/barnes-portfolio/00_D365_Dashboard_auqyvb.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566761469/barnes-portfolio/00_D365_Dashboard_auqyvb.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566831442/barnes-portfolio/00_D365_Dashboard-Mobile-01_lnbuof.jpg',
          }
        }
      },
      {
        id:52,
        content: {
          title:null,
          subtitle: null,
          description: null,

          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566761193/barnes-portfolio/01_D365_Dashboard_rhobuv.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566761193/barnes-portfolio/01_D365_Dashboard_rhobuv.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566761193/barnes-portfolio/01_D365_Dashboard_rhobuv.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/q_60,w_1200/v1566831411/barnes-portfolio/01_D365_Dashboard-mobile_cq5mxv.jpg',
          }
        }
      },
      {
        id:53,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
          }
        }
      },
      {
        id:54,
        content: {
          title:null,
          subtitle: null,
          description: null,

          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566763973/barnes-portfolio/03_D365_DataViz_k5bhes.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566763973/barnes-portfolio/03_D365_DataViz_k5bhes.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566763973/barnes-portfolio/03_D365_DataViz_k5bhes.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566763973/barnes-portfolio/03_D365_DataViz_k5bhes.jpg',
          }
        }
      },
      {
        id:55,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566767318/barnes-portfolio/04_D365_ComponentBreakdown-01_kmsjrs.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_3000,q_30/v1566767318/barnes-portfolio/04_D365_ComponentBreakdown-01_kmsjrs.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566767318/barnes-portfolio/04_D365_ComponentBreakdown-01_kmsjrs.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566831693/barnes-portfolio/04_D365_ComponentBreakdown-Mobile_fxsnhw.jpg',
          }
        }
      },
      {
        id:56,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566769178/barnes-portfolio/06_D365_Breakdown_nykmlm.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_35/v1566769178/barnes-portfolio/06_D365_Breakdown_nykmlm.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566769178/barnes-portfolio/06_D365_Breakdown_nykmlm.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566769178/barnes-portfolio/06_D365_Breakdown_nykmlm.jpg',
          }
        }
      },
      {
        id:57,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566777548/barnes-portfolio/07_D365_Breakdown_egckd6.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_35/v1566777548/barnes-portfolio/07_D365_Breakdown_egckd6.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566777548/barnes-portfolio/07_D365_Breakdown_egckd6.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566783901/barnes-portfolio/07_D365_Breakdown-Mobile_glmgpw.jpg',
          }
        }
      },
      {
        id:58,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566777431/barnes-portfolio/12_D365_PeoplePicker_px2r9f.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_35,w_3000/v1566777431/barnes-portfolio/12_D365_PeoplePicker_px2r9f.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566777431/barnes-portfolio/12_D365_PeoplePicker_px2r9f.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566783902/barnes-portfolio/12_D365_PeoplePicker-Mobile_i6fk26.jpg',
          }
        }
      },
      {
        id:59,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566777434/barnes-portfolio/14_D365_SideNav_nq5u1i.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_3000,q_35/v1566777434/barnes-portfolio/14_D365_SideNav_nq5u1i.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566777434/barnes-portfolio/14_D365_SideNav_nq5u1i.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566783902/barnes-portfolio/14_D365_SideNav-Mobile_w4olay.jpg',
          }
        }
      },
      {
        id:60,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566777431/barnes-portfolio/15_D365_TextFields_p8xlkj.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_3000,q_35/v1566777431/barnes-portfolio/15_D365_TextFields_p8xlkj.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566777431/barnes-portfolio/15_D365_TextFields_p8xlkj.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566783901/barnes-portfolio/15_D365_TextFields-Mobile_orq4y1.jpg',
          }
        }
      },
      {
        id:61,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566777422/barnes-portfolio/10_D365_FlyoutCard_cwahfh.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_3000,q_40/v1566777422/barnes-portfolio/10_D365_FlyoutCard_cwahfh.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566777422/barnes-portfolio/10_D365_FlyoutCard_cwahfh.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566783902/barnes-portfolio/10_D365_FlyoutCard-Mobile_feyyxo.jpg',
          }
        }
      },
      {
        id:62,
        content: {
          title:null,
          subtitle: null,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566846005/barnes-portfolio/16_D365_CalendarColor_eqz1eb.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/w_3400,q_35/v1566846315/barnes-portfolio/16_D365_CalendarColor_ys6jqq.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566846315/barnes-portfolio/16_D365_CalendarColor_ys6jqq.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566847209/barnes-portfolio/16_D365_CalendarColor-Mobile_xmazbp.jpg',
          }
        }
      },
      {
        id:200,
        link:true,
        content: {
          title:'Tres Vessel Solutions',
          subtitle: 'Taking shipping and vessel analytics to a new level of sophistication and accuracy',
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900779/barnes-portfolio/29_Tres-Mobile-Collage_l5dxde.jpg',
          }
        }
      },
      {
        id:201,
        link:true,
        content: {
          title:'Microsoft Cohesion Team',
          subtitle: 'A global design language to span across and unite Microsoft Cloud Apps',
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566863171/barnes-portfolio/Frame_3_qguemj.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566863171/barnes-portfolio/Frame_3_qguemj.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_40/v1566863171/barnes-portfolio/Frame_3_qguemj.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_40/v1566863171/barnes-portfolio/Frame_3_qguemj.jpg',
          }
        }
      },
      {
        id:202,
        link:true,
        content: {
          title:'Microsoft Cohesion Team',
          subtitle: 'A global design language to span across and unite Microsoft Cloud Apps',
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566924962/barnes-portfolio/00_CohesionCover_qpk40j.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566924962/barnes-portfolio/00_CohesionCover_qpk40j.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566924962/barnes-portfolio/00_CohesionCover_qpk40j.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566924962/barnes-portfolio/00_CohesionCover_qpk40j.jpg',
          }
        }
      },
      {
        id:203,
        link: true,
        content: {
          title:'Microsoft Fluent Design',
          subtitle: `Defining a visionary path for Microsoft's New Design Language, Fluent`,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/00_Fluent-PowerBI_lopdon.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/00_Fluent-PowerBI_lopdon.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/00_Fluent-PowerBI-Mobile_cqgfss.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200,q_35/v1565900927/barnes-portfolio/00_Fluent-PowerBI-Mobile_cqgfss.jpg',
          }
        }
      },
      {
        id:204,
        link:true,
        content: {
          title:'Microsoft Dynamics Design Language',
          subtitle: `Evolving one of Microsoft's largest Sale's product suite through a comprehensive design language`,
          description: null,
          src: 'https://res.cloudinary.com/gestalt/image/upload/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
            medium: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
            small: 'https://res.cloudinary.com/gestalt/image/upload/w_1200/v1566922521/barnes-portfolio/17_D365_Components_om5skl.jpg',
          }
        }
      },
    ],
    toggleAbout: () => {
      this.setState((state) => {
        return {
          about: !state.about
        }
      })
    console.log(this.state.about)
    }
  }
  render(){
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export {AppState as AppState};

export default Consumer;
