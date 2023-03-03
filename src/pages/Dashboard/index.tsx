import { Container } from "./styled";
import useCompany from '../../hooks/useCompany';
import Companies from "../../components/Companies";

const Dashboard = () => {
  const { loading, values, errors, handleChange, handleSubmit, handleExportSendEmail, companies, exported } = useCompany();
  return (
    <Container>
      <h1>Companies</h1>
      <Companies
        loading={loading}
        values={values}
        errors={errors}
        companies={companies}
        exported={exported}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleExportSendEmail={handleExportSendEmail}
      />
    </Container>
  );
}

export default Dashboard;