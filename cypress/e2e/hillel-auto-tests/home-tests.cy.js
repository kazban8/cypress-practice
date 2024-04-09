/// <reference types="cypress" />

describe('atribute href from social links', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
    });

    it("The link corresponds to the site Facebook", () => {
        cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'https://www.facebook.com/Hillel.IT.School');
    })

    it("The link corresponds to the site Telegram", () => {
        cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 'https://t.me/ithillel_kyiv');
    })

    it("The link corresponds to the site YouTube", () => {
        cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'https://www.youtube.com/user/HillelITSchool');
    })

    it("The link corresponds to the site Instagram", () => {
        cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'https://www.instagram.com/hillel_itschool/');
    })

    it("The link corresponds to the site Linkedin", () => {
        cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'https://www.linkedin.com/school/ithillel/');
    })
})

describe('login form test', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
    });

    it("The SignIn button opens a login form", () => {
        cy.get('button').contains('Sign In').click();
        cy.get('h4.modal-title').should('be.visible')
    })
})

describe('registration form test', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            },
        });
    });

    it("The SignUp button opens a registration form", () => {
        cy.get('button').contains('Sign up').click();
        cy.get('h4.modal-title').should('be.visible')
    })
})
