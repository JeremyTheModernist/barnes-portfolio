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
    overviews: [
      {
        id:'tres solutions',
        columnOneClient: 'Client: Tres Vessel Solutions.',
        columnOneWork: 'Work: Identity, Responsive Website, Branding, Content. Disclaimer: I do not own the following photographs, and many exist for mock purposes only.',
        columnTwo: 'Tres Solutions is a Vessel Analytics company, supplying data analytics to companies across the world.'
      },
      {
        id:'woven magazine',
        content:"here is some new content!"
      }
    ],
    breakdowns: [
      {
        id:'tres solutions 1',
        columnOne: 'Tres Solutions was one of those rare, but powerful combinations of client and designer goals. At every turn of the project we found ourselves holding content, user experience, and visual communication in equal tension to ensure the success of the project.',
        columnTwo: 'As with all really great processes, the design continued to reveal new directions that we could take with imagery, color, and layout. The final result was a powerful combination of precise imagery and clear communication.'
      },
      {
        id:'tres solutions 2',
        columnOne: 'As a part of my process with Tres Solutions, I explored a range of visual collateral and identity pieces. The above mocks showcase some of the logos that came out of this exploration, marks of modernity and precision. Ultimately, Tres Solutions kept their established logo for it’s visual recognition with existing customers.',
        columnTwo: 'Systems are the foundation of strong, scalable, and cohesive visual identities. So, as the website design unfolded, I distilled and catalogued a concise set of design parameters. This ensured the integrity of the system and that Tres’ new voice was consistently on target for their customers and onboarding users.'
      }
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
          src: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/13_Tres-toolkit_nolp0n.jpg',
          breakpointImgs: {
            large: 'https://res.cloudinary.com/gestalt/image/upload/q_40/v1565900927/barnes-portfolio/13_Tres-toolkit_nolp0n.jpg',
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
