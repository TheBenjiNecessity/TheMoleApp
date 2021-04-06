module.exports = {
	testEnvironment: 'jsdom',
	testRegex: '.*\\.(test|spec)?\\.(js|jsx)$',
	moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
	verbose: true,
	setupFilesAfterEnv: [ '<rootDir>/src/setupTests.js' ],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/src/__mocks__/fileMock.js',
		'\\.(css|sass|scss)$': 'identity-obj-proxy'
	},
	snapshotSerializers: [ 'enzyme-to-json/serializer' ]
};
