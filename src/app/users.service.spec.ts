import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  //Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        UsersService,
        { 
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  describe('test for getUser', ()=>{

    it("should return the user's data with an id",
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend: MockBackend)=>{

        //Arrange
        let dataResponse;
        let userMock ={
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
        mockBackend.connections.subscribe(connection =>{
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/3');
          connection.mockRespond(new Response(mockResponse));
        });

        //Act
        usersService.getUser(3)
        .subscribe(response =>{
          dataResponse = response;
        });
        tick();

        //Assert

        expect(dataResponse.id).toBeDefined();
        expect(dataResponse.name).toBeDefined();
        expect(dataResponse.address).toBeDefined();

      }))
    );


    it("should return the user's data when the server fail",
      inject([UsersService, MockBackend], fakeAsync((usersService, mockBackend: MockBackend)=>{

        //Arrange
        let dataResponse, dataError;
        let userMock ={
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
        mockBackend.connections.subscribe(connection =>{
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/3');
          connection.mockError(new Error('error'));
        });

        //Act
        usersService.getUser(3)
        .subscribe(
          response =>{// succcess
            dataResponse = response;
          },
          error =>{ //error
            dataError = error;
          }
        );
        tick();

        //Assert

        expect(dataResponse).toBeUndefined();
        expect(dataError).toBeDefined();

      }))
    );

  });
});
