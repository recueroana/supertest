const request = require("supertest");
const ApiUrl = "https://restful-booker.herokuapp.com";

describe('("POST reservas', () => {
    
    it("Criar uma reserva em booking", () => {
       const newBooking = {
        firstname : "Maria",
        lastname : "Brown",
        totalprice : 205,
        depositpaid : true,
        bookingdates : {
            checkin : "2024-07-01",
            checkout : "2024-07-10"
        },
        additionalneeds : "Breakfast"
       };
       return request(ApiUrl)
       .post("/booking/")
       .set('Accept','application/json')
       .set('Content-Type','application/json')
       .send(newBooking)
       .expect(200)
       .then(response => {
         console.log(response.body);
         expect(response.body.booking.firstname).toEqual("Maria");
         expect(response.body.booking.lastname).toEqual("Brown");
         expect(response.body.booking.totalprice).toEqual(205);
         expect(response.body.booking.depositpaid).toBeTruthy();
         expect(response.body.booking.bookingdates.checkin).toEqual("2024-07-01");
         expect(response.body.booking.bookingdates.checkout).toEqual("2024-07-10");
         expect(response.body.booking.additionalneeds).toEqual("Breakfast");
        });
    })
});

