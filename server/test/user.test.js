import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import application from '../server.js'
import StatusCode from '../configuration/statuscode.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

const testingNonExistentRoute = () => {
	describe('testingNonExistentRoute', () => {
		test('HTTP call against a route that does not exist in the API.', done => {
			Chai.request(application)
				.get(`/${randomString}`)
				.end((request, response) => {
					response.should.have.a.status(StatusCode.NOT_FOUND)
					done()
				})
		})
	})
}

const getAllUsers = () => {
	test('Expecting a return of all users in database.', done => {
		Chai.request(application)
			.get('/user')
			.end((request, response) => {
				response.should.have.a.status(StatusCode.OK)
				response.body.should.be.a('array')
				done()
			})
	})
}

const updateUser = () => {
	const userId = '6050724c43d99e1a9c72a917'
	test('Should manipulate data of a current object in the user entity', done => {
		Chai.request(application)
			.put(`/user/${userId}`)
			.send({username: 'oscarWithChangedUsername', password: '1234' , email: 'test'})
			.end((request, response) => {
				response.should.have.a.status(StatusCode.OK)
				response.body.should.have.be.a('object')
				response.body.data.should.have.property('_id').eq(userId)
				done()
			})
	})
}

describe('TESTING THE USER API ENTITY', () => {
	testingNonExistentRoute()
	getAllUsers()
	updateUser()
})