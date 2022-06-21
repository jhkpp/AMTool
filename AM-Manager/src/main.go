package main

import (
	"fmt"
	"net/http"
	"os"
)

type ManagerServer struct {
	Port int16
}

func (m ManagerServer) InitServer() {

}

func main() {
	v := os.Args[1:]

	port

	if port != "" {
		fmt.Println(port)
		fmt.Println("Open Port:", port)

		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			fmt.Fprintf(w, "Manager")
		})

		http.ListenAndServe(":5000", nil)
	}

	return
}
