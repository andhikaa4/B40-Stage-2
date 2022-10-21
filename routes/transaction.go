package routes

import (
	"dumbmerch/handlers"
	"dumbmerch/pkg/middleware"
	"dumbmerch/pkg/mysql"
	"dumbmerch/repositories"

	"github.com/gorilla/mux"
)

func TransactionRoutes(r *mux.Router) {
	TransactionRepository := repositories.RepositoryTransaction(mysql.DB)
	h := handlers.HandlerTransaction(TransactionRepository)

	r.HandleFunc("/transactions", middleware.Auth(h.FindTransaction)).Methods("GET")
	r.HandleFunc("/transactions/{id}", h.GetTransaction).Methods("GET")
	r.HandleFunc("/transactions", middleware.Auth(h.CreateTransaction)).Methods("POST")
	r.HandleFunc("/transactions/{id}", middleware.Auth(h.UpdateTransaction)).Methods("PATCH")
	r.HandleFunc("/transactions/{id}", middleware.Auth(h.DeleteTransaction)).Methods("DELETE")
}
