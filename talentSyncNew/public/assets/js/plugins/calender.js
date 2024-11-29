/*
Template: Hope-Ui - Responsive Bootstrap 5 Admin Dashboard Template
Author: iqonic.design
Design and Developed by: iqonic.design
NOTE: This file contains the all calender events.
*/
"use strict"

if (document.querySelectorAll('#calendar1').length) {
    document.addEventListener('DOMContentLoaded', async function () {


        let response = await fetch('/jobpost/get-all')
        let allApplications = await response.json()
        // console.log(allApplications)

        let events = []
        events = allApplications.data.map((application) => {
            console.log(application)
            // let startMinutes = new Date(application.startDate).getMinutes();
            // startMinutes = startMinutes <= 9 ? '0' + startMinutes : startMinutes


            // let start = new Date(), 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z
            // let startHours = new Date(application.startDate).getHours();
            // startHours = startHours <= 9 ? '0' + startHours : startHours

            // let endMinutes = new Date(application.endDate).getMinutes();
            // endMinutes = endMinutes <= 9 ? '0' + endMinutes : endMinutes

            // let endHours = new Date(application.endDate).getHours();
            // endHours = endHours <= 9 ? '0' + endHours : endHours

            let bgColor = null
            let borderColor = null
            let txtColor = null
            if (application.status == "cancelled") {
                bgColor = "rgba(58,87,232,0.2)"
                txtColor = "rgba(58,87,232,1)"
                borderColor = "rgba(58,87,232,1)"
            } else if (application.status == null) {
                bgColor = "rgba(255, 165, 0, 0.8)"
                txtColor = "#2C2C2C"
                borderColor = "#2C2C2C"
            } else if (application.status == "honoured") {
                bgColor = "rgb(86, 237, 48, 0.8)"
                txtColor = "#006400"
                borderColor = "#006400"
            }
            else if (application.status == "pending") {
                bgColor = "rgba(139, 0, 0, 0.8)"
                txtColor = "#fff"
                borderColor = "#8B0000"
            }
            // end: moment(new Date(application.endDate), 'YYYY-MM-DD').format('YYYY-MM-DD') + `T${endHours + ":" + endMinutes}:00.000Z`,
            return {
                title: `${application.companyName} - ${application.jobTitle}`, //change thsi later
                url: `/viewAppointment/${application._id}/${application.contactId}`,
                description: "Helo",
                start: moment(new Date(application.applicationDeadline), 'YYYY-MM-DD').format('YYYY-MM-DD') + `T05:30:00.000Z`,
                // backgroundColor: 'rgba(58,87,232,0.2)',
                backgroundColor: bgColor,
                // textColor: 'rgba(58,87,232,1)',
                textColor: txtColor,
                // borderColor: 'rgba(58,87,232,1)'
                borderColor: borderColor
            }
        })


        //predefined
        let calendarEl = document.getElementById('calendar1');
        let calendar1 = new FullCalendar.Calendar(calendarEl, {
            selectable: true,
            plugins: ["timeGrid", "dayGrid", "list", "interaction"],
            timeZone: "UTC",
            defaultView: "dayGridMonth",
            contentHeight: "auto",
            eventLimit: true,
            dayMaxEvents: 4,
            header: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            },
            dateClick: function (info) {
                $('#schedule-start-date').val(info.dateStr)
                $('#schedule-end-date').val(info.dateStr)
                $('#date-event').modal('show')
            },
            events: events
            // events: [

            //     {
            //         title: 'Birthday Party',
            //         start: moment(new Date(), 'YYYY-MM-DD').add(-5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
            //         backgroundColor: 'rgba(235,153,27,0.2)',
            //         textColor: 'rgba(235,153,27,1)',
            //         borderColor: 'rgba(235,153,27,1)'
            //     },


            // ]
        });
        calendar1.render();
    });

}