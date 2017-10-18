package admin

import (
	"reflect"

	"github.com/qor/qor"
	"github.com/qor/roles"
)

// HasPermissioner has permission interface
type HasPermissioner interface {
	HasPermission(roles.PermissionMode, *qor.Context) bool
}

func equal(a, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
