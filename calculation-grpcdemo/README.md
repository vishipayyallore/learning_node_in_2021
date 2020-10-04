# Simple gRPC Sample

## To Generate the files using protoc

protoc --plugin=protoc-gen-ts=D:/gRPC_Session11_26Sep2020/Source/college-gRPCweb/node_modules/.bin/protoc-gen-ts.cmd --js_out=import_style=commonjs,binary:D:/gRPC_Session11_26Sep2020/Source/college-gRPCweb --ts_out=service=grpc-web:D:/gRPC_Session11_26Sep2020/Source/college-gRPCweb src/app/proto/CollegeApi.proto

-- Working
protoc -I=D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos --plugin=protoc-gen-grpc=D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/node_modules/grpc-tools/bin/grpc_node_plugin --js_out=import_style=commonjs,binary:D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos/calculations.proto

-- 


To get started, make sure to install the NPM dependencies:
`$ npm install`

