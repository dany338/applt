import { Container } from "./styled";
import useCompany from '../../hooks/useCompany';
import Companies from "../../components/Companies";

const Dashboard = () => {
  const { loading, values, errors, handleChange, handleSubmit, handleExportSendEmail, companies, exported, email, from, role, onChangeEmail } = useCompany();
  return (
    <Container>
      <h1>Companies</h1>
      <Companies
        loading={loading}
        values={values}
        errors={errors}
        companies={companies}
        exported={exported}
        email={email}
        from={from}
        role={role}
        onChangeEmail={onChangeEmail}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleExportSendEmail={handleExportSendEmail}
      />
    </Container>
  );
}

export default Dashboard;