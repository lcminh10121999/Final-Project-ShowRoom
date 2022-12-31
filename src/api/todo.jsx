import axiosClient from "./axiosClient";
import axios from "axios";
import swal from "sweetalert";
const userApi = {
  async getAllUser() {
    const response = await axios.get("/api/list-user").then((res) => {
      if (res.data.status === 200) {
        console.log("success");
        return res;
      }
    });
    return response;
  },

  //   async get(id) {
  //     const url = `products/${id}/`;
  //     const response = await axiosClient.get(url);
  //     return response;
  //   },
  // async login(data) {
  //   axios.get("/sanctum/csrf-cookie").then((response) => {
  //     axios.post("/api/login", data).then((res) => {
  //       if (res.data.status === 200) {
  //         console.log("success");

  //         localStorage.setItem("auth_token", res.data.token);
  //         localStorage.setItem("auth_name", res.data.username);
  //         swal("Success", res.data.message, "success");
  //       } else if (res.data.status === 401) {
  //         swal("Warning", res.data.message, "warning");
  //       } else {
  //         console.log(res.data.validation_error);
  //       }
  //     });
  //   });
  // },
  async logout() {
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/logout").then((res) => {
        if (res.data.status === 200) {
          console.log("success");

          localStorage.removeItem("auth_name");
          localStorage.removeItem("auth_token");
        } else {
          console.log("f");
        }
      });
    });
  },

  async add(data) {
    // const url = "carList";
    // const response = await axiosClient.post("carList", data);
    // console.log(response);
    // return response;
    try {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post("/api/register", data).then((res) => {
          if (res.data.status === 200) {
            console.log("success");
            alert("Success");
          } else {
            console.log(res.data.validation_error);
            alert("False" + res.data.validation_error);
          }
        });
      });

      // return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
  async delete(id) {
    // const url = "carList";
    // const response = await axiosClient.post("carList", data);
    // console.log(response);
    // return response;
    try {
      const response = await axiosClient.delete(`/car/${id}`);
      console.log(id);
      // return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
  async update(data) {
    // const url = "carList";
    // const response = await axiosClient.post("carList", data);
    // console.log(response);
    // return response;
    try {
      const response = await axiosClient.patch(`/car/${data.id}`, data);
      console.log("sai");
      console.log(data);
      // return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
};

export default userApi;
