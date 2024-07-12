const request = require("supertest");
const ApiUrl = "https://restful-booker.herokuapp.com";

it("Deve retornar 200 ao fazer um get em booking", () => {
    return request(ApiUrl)
        .get("/booking/")
        .expect(200)
});

it("Deve retornar 200 ao fazer um get por ID específico", () => {
    return request(ApiUrl)
        .get("/booking/6")
        .expect(200)
        .set('Accept', 'application/json')//Esse comando é passado conforme a documentação, quando não funciona somente /id
        .then(response => {
            expect(response.body.firstname).toEqual("Eric");
            expect(response.body.lastname).toEqual("Ericsson");
            expect(response.body.totalprice).toEqual(154);
            expect(response.body.depositpaid).toBeTruthy();
        });
});