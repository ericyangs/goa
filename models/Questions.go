package models

import (
	"github.com/Qsnh/goa/libs"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	"time"
)

type Questions struct {
	User        *Users      `orm:"rel(fk)"`
	Category    *Categories `orm:"rel(fk)"`
	Id          int64
	Title       string
	Description string
	ViewNum     int
	IsBan       int8
	CreatedAt   int64
	UpdatedAt   int64
	Answers     []*Answers `orm:"reverse(many)"`
}

func CreateQuestion(categoryId int64, title string, description string, user *Users) (int64, error) {
	category, _ := FindCategoryById(categoryId)
	question := new(Questions)
	question.Category = category
	question.User = user
	question.Title = title
	question.Description = description
	question.ViewNum = 0
	question.IsBan = -1
	question.CreatedAt = time.Now().Unix()
	question.UpdatedAt = time.Now().Unix()

	return orm.NewOrm().Insert(question)
}

func FindQuestionById(id string) (*Questions, error) {
	question := new(Questions)
	err := orm.NewOrm().QueryTable(question).Filter("id", id).RelatedSel().One(question)
	if err != nil {
		return nil, err
	}
	return question, nil
}

func QuestionPaginate(page int64, pageSize int64) ([]Questions, *libs.BootstrapPaginator, error) {
	db := orm.NewOrm()
	questions := []Questions{}

	total, err := db.QueryTable("questions").Count()
	if err != nil {
		return questions, nil, err
	}

	paginator := new(libs.BootstrapPaginator)
	paginator.Instance(total, page, pageSize, beego.URLFor("IndexController.index"))

	if page > paginator.TotalPage {
		return questions, paginator, nil
	}

	var startPosition int64
	if page > 0 {
		startPosition = (page - 1) * pageSize
	}
	rowsNum, err := db.QueryTable("questions").RelatedSel().OrderBy("-created_at", "-id").Limit(pageSize, startPosition).All(&questions)
	if err != nil || rowsNum == 0 {
		return questions, paginator, err
	}
	return questions, paginator, nil
}
