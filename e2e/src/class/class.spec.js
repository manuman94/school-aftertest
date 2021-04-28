const client = require('frisby');

describe('Class endpoint', () => {

    const baseurl = jasmine.getEnv().cli_args.baseurl;
    const endpoint = 'classes';
    const full_endpoint_path = baseurl + endpoint;

    it('should post a new class', async (done) => {
        const payload = { 
            name: "My automated class 2", 
        };
        client.post(full_endpoint_path, payload)
            .then((result) => {
                expect(result.status).toBe(201);
                done();
            }, done.fail);
    });

});