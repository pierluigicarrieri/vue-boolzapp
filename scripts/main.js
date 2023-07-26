"use strict";

Vue.createApp ({

    data () {

        return {

            activeContact: null,

            newMessage: {
                date: "10/01/2020 15:30:55",
                message: "",
                status: "sent",
            },

            autoContactReply: {
                date: "10/01/2020 15:30:55",
                message: "ok",
                status: "received",
            },

            contattiFiltered: [],

            filter : "",

            contatti: [
                {
                    name: "Michele",
                    id: 1,
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    id: 2,
                    avatar: "_2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                        date: "20/03/2020 16:30:55",
                        message: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                        },
                        {
                        date: "20/03/2020 16:35:00",
                        message: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "received",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    id: 3,
                    avatar: "_3",
                    messages: [
                        {
                        date: "28/03/2020 10:10:40",
                        message: "La Marianna va in campagna",
                        status: "received",
                        },
                        {
                        date: "28/03/2020 10:20:10",
                        message: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                        },
                        {
                        date: "28/03/2020 16:15:22",
                        message: "Ah scusa!",
                        status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    id: 4,
                    avatar: "_4",
                    messages: [
                        {
                        date: "10/01/2020 15:30:55",
                        message: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                        },
                        {
                        date: "10/01/2020 15:50:00",
                        message: "Si, ma preferirei andare al cinema",
                        status: "received",
                        },
                    ],
                },
            ],

        }

    },

    methods: {

        onClick(contatto) {

            this.activeContact = contatto;

        },

        addNewMessage () {

            const newMessageClone = {...this.newMessage};

            this.activeContact.messages.push(newMessageClone);

            setTimeout (() => this.activeContact.messages.push(this.autoContactReply), 1000);

        },

        filterContacts () {

            this.contattiFiltered = this.contatti.filter((contact) => 
                contact.name.toLowerCase().includes(this.filter.toLowerCase())
            )

        }

    },

    beforeMount () {

        this.activeContact = this.contatti[0];

        this.contattiFiltered = this.contatti;

    }


}).mount ("#app");