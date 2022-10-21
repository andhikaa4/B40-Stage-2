package models

import "time"

type Transaction struct {
	ID        int                  `json:"id" gorm:"primary_key:auto_increment"`
	BuyerID   int                  `json:"buyer_id"`
	Buyer     UsersOrderResponse   `json:"userOrder"`
	Status    string               `json:"status"  gorm:"type:varchar(25)"`
	ProductID int                  `json:"product_id" form:"product_id" `
	Product   ProductOrderResponse `json:"product"`
	CreatedAt time.Time            `json:"-"`
	UpdatedAt time.Time            `json:"-"`
}
