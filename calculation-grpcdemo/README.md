# Simple gRPC Sample

## To Generate the files using protoc

protoc --plugin=protoc-gen-ts=D:/gRPC_Session11_26Sep2020/Source/college-gRPCweb/node_modules/.bin/protoc-gen-ts.cmd --js_out=import_style=commonjs,binary:D:/gRPC_Session11_26Sep2020/Source/college-gRPCweb --ts_out=service=grpc-web:D:/gRPC_Session11_26Sep2020/Source/college-gRPCweb src/app/proto/CollegeApi.proto

protoc --proto_path=./src --js_out=import_style=commonjs,binary:./protos/generated --grpc_out=./protos/generated --plugin=protoc-gen-grpc=grpc_node_plugin src/protos/calculations.proto

protoc  --js_out=import_style=commonjs,binary:./protos/generated --grpc_out=./protos/generated --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/protos/calculations.proto

protoc  --js_out=import_style=commonjs,binary:./protos/generated --grpc_out=./protos/generated --plugin=protoc-gen-grpc=$(which grpc_node_plugin) D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/protos/calculations.proto

protoc -I=./src --js_out=import_style=commonjs,binary:./protos/generated --grpc_out=./protos/generated D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos/calculations.proto

protoc --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc=$(which grpc_node_plugin) hello.proto


To get started, make sure to install the NPM dependencies:
`$ npm install`

