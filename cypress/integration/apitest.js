context('testing request', () => {
    it('test of get request', () => {
        cy.request('https://reqres.in/api/users?page=2')
            .then(response => {
                console.log(response)
                expect(response).to.have.property('status', 200)
                expect(response.body.data[0]).to.have.property('first_name', 'Michael')
                expect(response.body.data).to.have.lengthOf(6)
            })
    })

    it('test of POST request', () => {
        let body = {
            name: "morpheus",
            job: "leader"
        }
        cy.request('POST', 'https://reqres.in/api/users', body)
            .then(response => {
                console.log(response)
                expect(response).to.have.property('status', 201)
                expect(response.body).to.have.property('name', body.name)
                expect(response.body).to.have.property('job', body.job)
            })
    })
})