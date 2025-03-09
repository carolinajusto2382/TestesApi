describe('New User', () => {
  const baseUrl = 'https://petstore.swagger.io';

  it('Deve criar um novo usuário', () => {
    cy.request('POST', baseUrl + '/v2/user', 
    {
          "id": 0,
          "username": "carolina2",
          "firstName": "carolina",
          "lastName": "justo",
          "email": "carolina@gmail.com",
          "password": "12345678",
          "phone": "31974859422",
          "userStatus": 0
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
});