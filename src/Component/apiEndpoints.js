// const BASE_URL = "https://x4tlhqkd-3000.inc1.devtunnels.ms";
// const BASE_URL = "http://13.60.141.161:3000";
// const BASE_URL = "https://crm.7omoons.com";
const BASE_URL = "https://crm.7omoons.com:3000";





export const endpoints = {
    LoginUsers: `${BASE_URL}/api/v1/login`,
    CreateCustomer: `${BASE_URL}/api/v1/customer/add-customer`,
    updateCustomer: `${BASE_URL}/api/v1/customer/update-customer/`,
    GetCustomer: `${BASE_URL}/api/v1/customer/get-customer`,
    GetAllCustomer: `${BASE_URL}/api/v1/customer/get-all-customers`,
    CreateProducts: `${BASE_URL}/api/v1/product/add-product`,
    GetAllProduts: `${BASE_URL}/api/v1/product/get-all-products`,
    GetProduts: `${BASE_URL}/api/v1/product/get-product/`,
    GetDashboardReport: `${BASE_URL}/api/v1/dashboard/get-order-details`,
    GetDashboardInvoice: `${BASE_URL}/api/v1/invoice/get-invoice-stats`,
    CreateAgent: `${BASE_URL}/api/v1/agent/create-agent`,
    GetAllAgent: `${BASE_URL}/api/v1/agent/get-all-agents`,
    UpdateAgent: `${BASE_URL}/api/v1/agent/update-agent/`,
    GetAgent: `${BASE_URL}/api/v1/agent/get-agent/`,
    CreateInvoice: `${BASE_URL}/api/v1/invoice/create-invoice`,
    UpdateInvoice: `${BASE_URL}/api/v1/invoice/update-invoice/`,
    GetAllInvoiceBYAgent: `${BASE_URL}/api/v1/invoice/get-all-invoices`,
    GetCompanybyClient: `${BASE_URL}/api/v1/customer/get-inputFields-content`,
    GetDashboardGraph: `${BASE_URL}/api/v1/dashboard/get-invoices-analytics`,
    GetAgentTotalSale: `${BASE_URL}/api/v1/dashboard/get-total-sale`,
    GetInvoicebyADmin: `${BASE_URL}/api/v1/dashboard/get-total-sale`,
    GetAdminReportData: `${BASE_URL}/api/v1/dashboard/sale-details`,
    GetAdminOrdernbyDate: `${BASE_URL}/api/v1/dashboard/invoices-by-dates`,
    GetInvoicebymonth: `${BASE_URL}/api/v1/dashboard/get-invoice-stats`,
    CreatePayment:`${BASE_URL}/api/v1/payment/create-payment`,
    ChangeInvoiceStatus:`${BASE_URL}/api/v1/invoice/change-invoice-status/`,
    ChangeCustomeStatus:`${BASE_URL}/api/v1/customer/change-status`,
    OrderStatusChange:`${BASE_URL}/api/v1/invoice/change-order-status/`,
    AllInvoiceGetByAdmin:`${BASE_URL}/api/v1/invoice/get-all-invoices-by-admin`,

};

