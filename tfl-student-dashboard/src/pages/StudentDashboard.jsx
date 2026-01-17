import Header from '../components/layout/Header';
import SkillHealthCard from '../components/dashboard/SkillHealthCard.jsx';
import ProjectProgressCard from '../components/dashboard/ProjectProgressCard.jsx';
import LearningPathTimeline from '../components/dashboard/LearningPathTimeLine.jsx';
import AssessmentSummary from '../components/dashboard/AssessmentSummary.jsx';
import ConfidenceMeter from '../components/dashboard/ConfidenceMeter.jsx';
import NextActions from '../components/dashboard/NextActions.jsx';

export default function StudentDashboard() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-6">
          <SkillHealthCard />
          <ProjectProgressCard />
          <AssessmentSummary />
        </div>
        <div className="col-md-6">
          <LearningPathTimeline />
          <ConfidenceMeter />
          <NextActions />
        </div>
      </div>
    </>
  );
}