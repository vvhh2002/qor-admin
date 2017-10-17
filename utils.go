package admin

import "reflect"

func equal(a, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
