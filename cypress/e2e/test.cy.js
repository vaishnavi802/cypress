describe('Test localhost:5000/', () => {
    it('should return Hello World!', () => {
        cy.request('http://localhost:5000/')
            .then((response) => {
                expect(response.body).to.equal('server working')
            })
    })
})
