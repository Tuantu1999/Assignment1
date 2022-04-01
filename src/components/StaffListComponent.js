import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null,
            selectedColumn: "col-12 col-md-6 col-lg-4 mt-3"
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
                        <CardImg width="80%" src={staff.image} alt={staff.name} />

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
                
            </div>
        );
    }
}

export default StaffList;
