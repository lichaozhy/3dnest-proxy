const mitm = require('@lemonce3/mitm');

const reg = /play_edit_house/;
const local = 'http://192.168.31.244:8080'

const mitmServer = mitm.createServer({
	strategy: {
		request(context, respond, forward) {
			const originUrl = context.request.url;

			console.log(originUrl.toString());

			if (!reg.test(originUrl)) {
				context.request.url.origin = local;
			}

			forward();
		}
	}
});

mitmServer.listen(2000);