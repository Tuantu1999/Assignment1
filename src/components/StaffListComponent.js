import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null,
            selectedColumn: "col-12 col-md-6 col-lg-4 mt-5"
        };
    }

    onStaffSelect(staff) {
        this.setState({
            selectedStaff: staff
        });
    }

    onColumnSelect(col) {
        this.setState({
            selectedColumn: col
        });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div className="col-12">
                    <Card>
                        {/* Ảnh nhân viên */}
                        <CardImg src={staff.image} width="100%" alt={staff.name} />

                        {/* Thẻ thông tin nhân viên */}
                        <CardBody>
                            <CardTitle>Họ và tên: {staff.name}</CardTitle>

                            <CardText>
                                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </CardText>

                            <CardText>
                                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </CardText>

                            <CardText>
                                Phòng ban: {staff.department.name}
                            </CardText>

                            <CardText>
                                Số ngày nghỉ còn lại: {staff.annualLeave}
                            </CardText>

                            <CardText>
                                Số ngày đã làm thêm: {staff.overTime}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );

        } else {
            return <div></div>;
        }
    }

    render() {
        const staffList = this.props.staffs.map((staff) => {
            return (
                <div className={this.state.selectedColumn}>
                    {/* dùng key để giúp react quản lý giá trị mà nó trỏ tới */}
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}> 
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                {/* Chọn chế độ hiển thị */}
                <div className="row m-3">
                    <label>
                        <span>
                            <b>Chọn số cột hiển thị</b>
                        </span>
                    </label>
                    <button onClick={() => this.onColumnSelect("col-md-2 mt-1")} className="btn btn-success mr-3">
                        6 cột
                    </button>
                    <button onClick={() => this.onColumnSelect("col-md-3 mt-1")} className="btn btn-success mr-3">
                        4 cột
                    </button>
                    <button onClick={() => this.onColumnSelect("col-md-4 mt-1")} className="btn btn-success mr-3">
                        3 cột
                    </button>
                    <button onClick={() => this.onColumnSelect("col-md-6 mt-1")} className="btn btn-success mr-3">
                        2 cột
                    </button>
                    <button onClick={() => this.onColumnSelect("col-md-12 mt-1")} className="btn btn-success mr-3">
                        1 cột
                    </button>
                </div>

                {/* hiển thị list */}
                <div className="row">{staffList}</div>

                {/* show list details */}
                <div className="row mt-5">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}

export default StaffList;
