import CardTitle from "../../../../../shared/cardtitle";
import {
  TitleTypography,
  ValueTypography,
} from "../../../../../shared/Typography";
import type { UserDataType } from "../../../type";
import "./GeneralInformation.scss";

interface GeneralDetailsProps {
  user: UserDataType;
}

const GeneralDetails = ({ user }: GeneralDetailsProps) => {
  const infoFields = [
    { title: "FULL NAME", value: `${user.first_name} ${user.last_name}` },
    { title: "GENDER", value: user.gender },
    { title: "EMAIL ADDRESS", value: user.email },
    { title: "PHONE NUMBER", value: user.phone_number },
    { title: "BVN", value: user.BVN },
    { title: "STATUS", value: user.status },
  ];

  const socialsFields = [
    { title: "TWITTER", value: user.twitter },
    { title: "FACEBOOK", value: user.facebook },
    { title: "INSTAGRAM", value: user.instagram },
  ];

  const guarantorFields = [
    { title: "GUARANTOR'S NAME", value: user.guarantor_name },
    { title: "GUARANTOR'S EMAIL", value: user.guarantor_email },
    { title: "GUARANTOR'S PHONE NUMBER", value: user.guarantor_phone_number },
  ];

  return (
    <div className="detail-container">
      <div className="card-content">
        <CardTitle title="General Details" />

        <div className="details-grid">
          {infoFields.map(({ title, value }) => (
            <div key={title} className="detail-item">
              <TitleTypography title={title} />
              <ValueTypography value={value || ""} />
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      <div className="card-content">
        <CardTitle title="Socials" />

        <div className="details-grid">
          {socialsFields.map(({ title, value }) => (
            <div key={title} className="detail-item">
              <TitleTypography title={title} />
              <ValueTypography value={value || ""} />
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      <div className="card-content">
        <CardTitle title="Guarantor" />

        <div className="details-grid">
          {guarantorFields.map(({ title, value }) => (
            <div key={title} className="detail-item">
              <TitleTypography title={title} />
              <ValueTypography value={value || ""} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
