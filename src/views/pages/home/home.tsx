import { useEffect, useState, useMemo } from "react";
import sortIcon from "@/../public/images/svg/sort.svg";
import columnsIcon from "@/../public/images/svg/columns.svg";
import sheetIcon from "@/../public/images/svg/sheet-view.svg";
import flash from "@/../public/images/svg/flash.svg";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomPopover from "@/views/components/popover";
import CustomTable, { HeaderType } from "@/views/components/table";
import { Switch } from "@/components/ui/switch";
import { DataType } from "@/types/data-type";
import useDebouncedValue from "@/hooks/useDebounce";
import SortContent from "@/views/components/sort-content";
import { sortItems, SortItemType } from "@/data/sort-items";
import { tableHeaders } from "@/data/headers";
import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query GetCompanyApplicantList {
    getCompanyApplicantList(page: 1, pageSize: 29, sort: { createdAt: desc }) {
      total
      pages
      applicants {
        id
        createdAt
        updatedAt
        email
        firstName
        lastName
        avgRating
        profilePhotoUrl
        linkedinUrl
        linkedinUsername
        linkedinBio
        linkedinEducations
        linkedinExperiences
        linkedinLicenseAndCertifications
        linkedinVolunteeringExperiences
        linkedinLanguages
        githubUrl
        githubUsername
        githubBio
        githubCompany
        githubWebsite
        githubPublicRepoCount
        githubLastYearContributionCount
        githubGainedStarCount
        githubGainedForkCount
        twitterUrl
        twitterUsername
        twitterBio
        twitterJob
        twitterWebsite
        sourceType
        sourceLink
        sourceUpdatedAt
        seeded
        phoneNumber
        address
        latitude
        longitude
        country
        gender
        gradUni
        dateOfBirth
        salaryExp
        salaryExp2
        salaryExpCurr
        salaryExpPeriod
        experience
        educationalBackground
        maritalStatus
        universityId
        companyId
        universityName
        isViewedByMe
        isSentToTeamso
        age
        rating
        isFavoritedByMe
        latestResume {
          url
        }
        activeApplication {
          id
          createdAt
          updatedAt
          coverLetter
          lexorank
          score
          aiFit
          salaryExp
          salaryExpCurr
          salaryExpPeriod
          seeded
          sourceType
          sourceLink
          deleted
          deletedAt
          deletedById
          jobListingId
          applicantId
          stageId
          companyId
          rejectedReasonId
          hasEvent
          isViewedByMe
          myOverallEvaluationAnswer
          jobListing {
            id
            createdAt
            updatedAt
            publishedAt
            draftedAt
            archivedAt
            name
            slug
            description
            jobRequirements
            salary
            salary2
            salaryCurr
            salaryPeriod
            status
            location
            latitude
            longitude
            city
            state
            postalCode
            country
            countryCode
            color
            type
            seeded
            isPreferred
            preferredCurrency
            preferredPeriod
            workTypeId
            requiredExperienceId
            employmentTypeId
            departmentId
            teamId
            companyEntegrationId
            createdById
            companyId
          }
          stage {
            id
            createdAt
            updatedAt
            name
            type
            lexorank
            companyId
            isLocked
          }
        }
      }
    }
  }
`;

const HomeView = () => {
  const { loading, error, data } = useQuery(GET_DATA);
  console.log("🚀 ~ HomeView ~ data:", data);

  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebouncedValue(search, 300);
  const [tableData, setTableData] = useState<DataType[]>([]);

  const [selectedFilter, setSelectedFilter] =
    useState<keyof SortItemType>("name");
  const [selectedDirection, setSelectedDirection] = useState<string>(
    sortItems[selectedFilter].directions[0]
  );

  function transformData(inputData: any): DataType[] {
    const applicants = inputData.getCompanyApplicantList.applicants;

    return applicants.map((applicant: any, index: number) => ({
      id: index + 1,
      imageUrl: applicant.profilePhotoUrl,
      name: `${applicant.firstName} ${applicant.lastName}`,
      email: applicant.email,
      stage: applicant.activeApplication.stage.name,
      rating: applicant.avgRating || applicant.rating || 0,
      appliedJob: applicant.activeApplication.jobListing.name,
      resume: applicant.latestResume?.url || "No resume available",
      aiFitScore: applicant.activeApplication.aiFit || "No AI Fit Score",
      source: applicant.sourceType,
      dateAdded: new Date(applicant.createdAt).toLocaleDateString(),
    }));
  }

  useEffect(() => {
    if (data) {
      setTableData(transformData(data));
    }
  }, [data]);

  const [headers, setHeaders] = useState<HeaderType[]>(tableHeaders);

  const sortedData = useMemo(() => {
    const direction =
      selectedDirection === "A-Z" || selectedDirection === "Low to High"
        ? "asc"
        : "desc";

    return [...tableData].sort((a, b) => {
      if (selectedFilter === "rating") {
        return direction === "asc" ? a.rating - b.rating : b.rating - a.rating;
      }

      const aValue = a[selectedFilter].toString();
      const bValue = b[selectedFilter].toString();

      return direction === "asc"
        ? aValue.localeCompare(bValue, "tr")
        : bValue.localeCompare(aValue, "tr");
    });
  }, [tableData, selectedFilter, selectedDirection]);

  const handleSwitchChange = (index: number) => {
    if (index !== 0) {
      setHeaders((prevHeaders) =>
        prevHeaders.map((header, i) =>
          i === index ? { ...header, checked: !header.checked } : header
        )
      );
    }
  };

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setTableData(tableData);
    } else {
      setTableData(
        tableData.filter(
          (item) =>
            item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            item.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            item.appliedJob
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase())
        )
      );
    }
  }, [debouncedSearch]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div className="h-full w-full pt-6">
      <div className="flex justify-end h-8 gap-3 items-center">
        <Input
          placeholder="Search"
          className="h-8 w-[140px] rounded-md border border-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <CustomPopover label="Sort" icon={sortIcon}>
          <SortContent
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedDirection={selectedDirection}
            setSelectedDirection={setSelectedDirection}
          />
        </CustomPopover>

        <CustomPopover label="Columns" icon={columnsIcon}>
          {headers.map((header, index) => (
            <div
              key={index}
              className="flex w-full justify-between items-center py-1"
            >
              <div className="flex gap-2 items-center">
                <img src={flash} alt="flash" className="h-5 w-5" />
                <p className="font-medium text-base leading-6">
                  {header.title}
                </p>
              </div>
              <Switch
                checked={header.checked}
                onCheckedChange={() => handleSwitchChange(index)}
              />
            </div>
          ))}
        </CustomPopover>

        <CustomPopover label="Sheet View" icon={sheetIcon}>
          <p>Place content for the popover here.</p>
        </CustomPopover>

        <Popover>
          <PopoverTrigger className="flex bg-white h-8 w-8 justify-center items-center rounded-md border border-gray-300">
            <span className="text-gray-600">...</span>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>

      <div className="pt-6 w-full h-full">
        <CustomTable headers={headers} data={sortedData} />
      </div>
    </div>
  );
};

export default HomeView;
