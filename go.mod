module github.com/qor/admin

go 1.12

replace gopkg.in/check.v1 => github.com/go-check/check v0.0.0-20180628173108-788fd7840127

replace golang.org/x/crypto => github.com/golang/crypto v0.0.0-20190513172903-22d7a77e9e5f

replace golang.org/x/sys => github.com/golang/sys v0.0.0-20190516110030-61b9204099cb

replace golang.org/x/net => github.com/golang/net v0.0.0-20190514140710-3ec191127204

replace golang.org/x/text => github.com/golang/text v0.3.2

replace golang.org/x/tools => github.com/golang/tools v0.0.0-20190517183331-d88f79806bbd

replace golang.org/x/sync => github.com/golang/sync v0.0.0-20190423024810-112230192c58

replace cloud.google.com/go => github.com/googleapis/google-cloud-go v0.39.0

replace google.golang.org/grpc => github.com/grpc/grpc-go v1.20.1

replace google.golang.org/appengine => github.com/golang/appengine v1.6.0

replace golang.org/x/time => github.com/golang/time v0.0.0-20190308202827-9d24e82272b4

replace golang.org/x/exp => github.com/golang/exp v0.0.0-20190510132918-efd6b22b2522

replace golang.org/x/lint => github.com/golang/lint v0.0.0-20190409202823-959b441ac422

replace golang.org/x/oauth2 => github.com/golang/oauth2 v0.0.0-20190517181255-950ef44c6e07

replace google.golang.org/genproto => github.com/google/go-genproto v0.0.0-20190516172635-bb713bdc0e52

replace golang.org/x/mobile => github.com/golang/mobile v0.0.0-20190509164839-32b2708ab171

replace golang.org/x/image => github.com/golang/image v0.0.0-20190516052701-61b8692d9a5c

replace google.golang.org/api => github.com/googleapis/google-api-go-client v0.5.0

replace github.com/qor/qor => ../qor-qor

replace github.com/qor/assetfs => ../qor-assetfs

replace github.com/qor/middlewares => ../qor-middlewares

replace github.com/qor/responder => ../qor-responder

replace github.com/qor/roles => ../qor-roles

replace github.com/qor/session => ../qor-session

replace github.com/qor/validations => ../qor-validations

require (
	github.com/asaskevich/govalidator v0.0.0-20190424111038-f61b66f89f4a // indirect
	github.com/gorilla/sessions v1.1.3 // indirect
	github.com/gosimple/slug v1.5.0 // indirect
	github.com/jinzhu/gorm v1.9.8
	github.com/jinzhu/inflection v0.0.0-20180308033659-04140366298a
	github.com/microcosm-cc/bluemonday v1.0.2 // indirect
	github.com/qor/assetfs v0.0.0-20170713023933-ff57fdc13a14
	github.com/qor/middlewares v0.0.0-20170822143614-781378b69454 // indirect
	github.com/qor/qor v0.0.0-20190319081902-186b0237364b
	github.com/qor/responder v0.0.0-20171031032654-b6def473574f
	github.com/qor/roles v0.0.0-20171127035124-d6375609fe3e
	github.com/qor/session v0.0.0-20170907035918-8206b0adab70
	github.com/qor/validations v0.0.0-20171228122639-f364bca61b46 // indirect
	github.com/rainycape/unidecode v0.0.0-20150907023854-cb7f23ec59be // indirect
	github.com/theplant/cldr v0.0.0-20190423050709-9f76f7ce4ee8
)
