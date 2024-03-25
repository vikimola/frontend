import React, {useEffect, useState} from "react";
import {createTheme, CssBaseline, styled, ThemeProvider} from "@mui/material";
import Footer from "./static/components/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./static/pages/home";
import Services from "./static/pages/services";
import Technologies from "./static/pages/technologies";
import About from "./static/pages/about";
import Contact from "./static/pages/contact";
import Cookies from "./static/pages/cookies";
import Gdpr from "./static/pages/gdpr";
import Terms_conditions from "./static/pages/terms_conditions";
import NewsletterUnsubscribe from "./static/pages/newsletterUnsubscribe";
import PageNotFound from "./static/pages/pageNotFound";
import CookieConsent from "./static/components/cookiePopup";

function App() {
    const lightTheme = {
        palette: {
            mode: 'light', primary: {
                main: '#00BFA5',
                contrastText: '#F5F5F5',
            }, secondary: {
                main: '#AD1457',
                // main: '#151586',
            }, error: {
                main: '#e21a00',
            }, text: {
                primary: '#424242', secondary: '#424242',
            }, info: {
                main: '#5300bf',
            }, success: {
                // main: '#00bf46',
                main: '#B71C1C',
            }, warning: {
                main: '#bf8900',
            },
            background: {
                default: '#00BFA5', paper: '#AD1457',
            },

        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 650,
                md: 760,
                lg: 1280,
                xl: 1920,
            },
        },
        typography: {
            fontFamily: 'Mulish, sans-serif',
            h1: {
                color: '#424242',
                fontSize: '3.5rem',
                '@media (min-width:600px)': {
                    fontSize: '4.7rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '5.375rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '6rem',
                }
            },
            h2: {
                color: '#424242',
                fontSize: '2.375rem',
                '@media (min-width:600px)': {
                    fontSize: '3.125rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '3.3rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '3.75rem',
                }
            },
            h3: {
                color: '#424242', fontWeight: 600,
                fontSize: '2rem',
                '@media (min-width:600px)': {
                    fontSize: '2.56rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '2.75rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '3rem',
                }
            }, h4: {
                color: '#424242',
                fontSize: '1.6rem',
                '@media (min-width:600px)': {
                    fontSize: '1.8rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '2rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '2.1rem',
                },

            }, h5: {
                color: '#424242',
                fontSize: '1.25rem',
                '@media (min-width:600px)': {
                    fontSize: '1.31rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '1.5rem',
                },
            }, h6: {
                color: '#424242',
                fontSize: '1.125rem',
                '@media (min-width:600px)': {
                    fontSize: '1.25rem',
                },

            }, body1: {
                color: '#424242',
                fontSize: '1rem',
                '@media (min-width:650px)': {
                    fontSize: '1.1rem',
                },
                '@media (min-width:1280px)': {
                    fontSize: '1.2rem',
                },

            }

        }, components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 28,
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    colorPrimary: {
                        backgroundColor: '#AD1457'
                        // backgroundColor: '#151586'
                        // backgroundColor: '#131379'
                    }
                }
            }
        },
    };

    const darkTheme = {
        palette: {
            primary: {
                main: '#00BFA5',
                // main: '#151586',
                // main: '#1DE9B6',
                // #00d4ff
                // contrastText: '#E0E0E0',
                contrastText: '#F5F5F5',
            }, secondary: {
                // main: '#e2003c',
                // main: '#880E4F', !!!
                // main: '#AD1457',
                // main: '#151586',
                main: '#00213B',
            }, error: {
                main: '#e21a00',
            }, text: {
                // primary: '#E0E0E0', secondary: '#424242',
                primary: '#E0E0E0', secondary: '#E0E0E0',
            }, info: {
                main: '#5300bf',
            }, success: {
                main: '#00bf46',
            }, warning: {
                main: '#bf8900',
            },
            background: {
                // default: "#00695C", paper: '#880E4F',
                // default: "#00695C", paper: '#151586',
                default: "#00695C", paper: '#00213B',
            },

        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
        typography: {
            fontFamily: 'Mulish, sans-serif',
            h1: {
                color: '#E0E0E0',
                fontSize: '3.5rem',
                '@media (min-width:600px)': {
                    fontSize: '4.7rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '5.375rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '6rem',
                }
            },
            h2: {
                color: '#E0E0E0',
                fontSize: '2.375rem',
                '@media (min-width:600px)': {
                    fontSize: '3.125rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '3.3rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '3.75rem',
                }
            },
            h3: {
                color: '#E0E0E0', fontWeight: 600, fontSize: '2rem',
                '@media (min-width:600px)': {
                    fontSize: '2.56rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '2.75rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '3rem',
                }

            }, h4: {
                color: '#E0E0E0',
                fontSize: '1.6rem',
                '@media (min-width:600px)': {
                    fontSize: '1.8rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '2rem',
                },
                '@media (min-width:1200px)': {
                    fontSize: '2.1rem',
                },

            }, h5: {
                color: '#E0E0E0',
                fontSize: '1.25rem',
                '@media (min-width:600px)': {
                    fontSize: '1.31rem',
                },
                '@media (min-width:900px)': {
                    fontSize: '1.5rem',
                },
            }, h6: {
                color: '#E0E0E0',
                fontSize: '1.125rem',
                '@media (min-width:600px)': {
                    fontSize: '1.25rem',
                },
            }, body1: {
                color: '#E0E0E0',
                fontSize: '1rem',
                '@media (min-width:650px)': {
                    fontSize: '1.1rem',
                },
                '@media (min-width:1280px)': {
                    fontSize: '1.2rem',
                },
            }

        }, components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 28,
                        // color: '#880E4F'
                        // backgroundColor: '#00213B'
                    },
                },
            }, MuiAppBar: {
                styleOverrides: {
                    colorPrimary: {
                        // backgroundColor: '#880E4F'
                        // backgroundColor: '#080831'
                        // backgroundColor: '#080831'
                        // backgroundColor: '#0c2898'
                        // backgroundColor: '#151586'
                        backgroundColor: '#00213B'
                    }
                }
            }
        },
    };

    const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('darkTheme') === 'true' || false);

    useEffect(() => {
        localStorage.setItem('darkTheme', String(isDarkTheme));
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const gradientContainerLight = styled('div')({
        background: 'linear-gradient(45deg, rgba(29,233,182,1) 33%, rgba(0,212,255,1) 85%)',
        padding: '20px',
    });
    const gradientContainerDark = styled('div')({
        background: 'linear-gradient(45deg, rgba(0,105,92,1) 33%, rgba(0,151,167,1) 85%)',
        padding: '20px',
    });

    return (

        <ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <CssBaseline/>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home isDarkTheme={isDarkTheme}
                                                             gradientContainerLight={gradientContainerLight}
                                                             gradientContainerDark={gradientContainerDark}/>}/>
                        {isDarkTheme && <Route exact path="/servicii"
                                               element={<Services isDarkTheme={isDarkTheme}
                                                                  bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme && <Route exact path="/tehnologii" element={<Technologies isDarkTheme={isDarkTheme}
                                                                                               bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme && <Route exact path="/despre" element={<About isDarkTheme={isDarkTheme}
                                                                                    bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme && <Route exact path="/contact" element={<Contact isDarkTheme={isDarkTheme}
                                                                                       bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme && <Route exact path="/cookies" element={<Cookies isDarkTheme={isDarkTheme}
                                                                                       bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme &&
                            <Route exact path="/politica-confidentialitate" element={<Gdpr isDarkTheme={isDarkTheme}
                                                                                           bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme &&
                            <Route exact path="/termeni-conditii" element={<Terms_conditions isDarkTheme={isDarkTheme}
                                                                                             bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme &&
                            <Route exact path="/newsletter-unsubscribe"
                                   element={<NewsletterUnsubscribe isDarkTheme={isDarkTheme}
                                                                   bgGradient={gradientContainerDark}/>}/>}
                        {isDarkTheme &&
                            <Route exact path="*"
                                   element={<PageNotFound isDarkTheme={isDarkTheme}
                                                          bgGradient={gradientContainerDark}/>}/>}
                        {!isDarkTheme && <Route exact path="/servicii"
                                                element={<Services isDarkTheme={isDarkTheme}
                                                                   bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme &&
                            <Route exact path="/tehnologii" element={<Technologies isDarkTheme={isDarkTheme}
                                                                                   bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme && <Route exact path="/despre" element={<About isDarkTheme={isDarkTheme}
                                                                                     bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme && <Route exact path="/contact" element={<Contact isDarkTheme={isDarkTheme}
                                                                                        bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme && <Route exact path="/cookies" element={<Cookies isDarkTheme={isDarkTheme}
                                                                                        bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme &&
                            <Route exact path="/politica-confidentialitate" element={<Gdpr isDarkTheme={isDarkTheme}
                                                                                           bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme &&
                            <Route exact path="/termeni-conditii" element={<Terms_conditions isDarkTheme={isDarkTheme}
                                                                                             bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme &&
                            <Route exact path="/newsletter-unsubscribe"
                                   element={<NewsletterUnsubscribe isDarkTheme={isDarkTheme}
                                                                   bgGradient={gradientContainerLight}/>}/>}
                        {!isDarkTheme &&
                            <Route exact path="*"
                                   element={<PageNotFound isDarkTheme={isDarkTheme}
                                                          bgGradient={gradientContainerLight}/>}/>}
                    </Routes>
                </BrowserRouter>

                {localStorage.removeItem('accepted-cookies')}

                <CookieConsent/>

                {
                    isDarkTheme ?
                        <Footer backgroundColor={'#004D40'} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
                        :
                        <Footer backgroundColor={'#009688'} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
                }


            </div>
        </ThemeProvider>
    );
}

export default App;