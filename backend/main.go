package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type FormData struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Wish  string `json:"wish"`
}

func handleSubmit(c *gin.Context) {
	var formData FormData

	// 解析 JSON 数据
	if err := c.BindJSON(&formData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to parse JSON data"})
		return
	}

	// 在这里处理 formData 对象，可以根据需要进行其他操作
	// 打印接收到的数据
	fmt.Println(formData)

	// 响应客户端
	c.JSON(http.StatusOK, gin.H{"message": "Received form data", "data": formData})
}

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
	r.POST("/submit", handleSubmit)

	r.Run(":8888")
}
