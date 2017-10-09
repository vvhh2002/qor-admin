package admin

import "github.com/qor/roles"

// Config admin config struct
type Config struct {
	Name       string
	Menu       []string
	Roler      func(data interface{}, context *Context) []string
	Permission *roles.Permission
	Themes     []ThemeInterface
	Priority   int
	Singleton  bool
	Invisible  bool
	PageCount  int
}
