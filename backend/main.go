package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	// 设置跨域访问配置
	r.Use(cors.Default())

	// 根路径
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, welcome to the root path!",
		})
	})

	// 处理 POST 请求，用于接收表单数据
	r.POST("/submit", func(c *gin.Context) {
		// 在这里处理表单数据，可以使用 c.PostForm 等方法获取表单字段
		name := c.PostForm("name")
		email := c.PostForm("email")
		wish := c.PostForm("wish")

		// 打印接收到的数据
		fmt.Println("Received data - Name:", name, "Email:", email, "Wish:", wish)

		// 假设处理完数据后返回一个成功的消息
		c.JSON(200, gin.H{
			"name":    name,
			"email":   email,
			"wish":    wish,
			"message": "Form submitted successfully!",
		})
	})

	r.Run(":8888")

}
