package transaction

type CreateTransactionRequest struct {
	BuyerID   int    `json:"buyer_id"`
	Status    string `json:"status"  gorm:"type:varchar(25)"`
	ProductID int    `json:"product_id"`
}

type UpdateTransactionRequest struct {
	Status string `json:"status"  gorm:"type:varchar(25)"`
}
