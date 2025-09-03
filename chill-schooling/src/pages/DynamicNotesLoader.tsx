import React from 'react';
import { useParams } from 'react-router-dom';

// Import all notes components
import KnowingOurNumbersNotes from './CBSE/Class6/Mathematics/KnowingOurNumbers/Notes';
import WholeNumbersNotes from './CBSE/Class6/Mathematics/WholeNumbers/Notes';
import PlayingWithNumbersNotes from './CBSE/Class6/Mathematics/PlayingWithNumbers/Notes';
import BasicGeometricalIdeasNotes from './CBSE/Class6/Mathematics/BasicGeometricalIdeas/Notes';
import UnderstandingElementaryShapesNotes from './CBSE/Class6/Mathematics/UnderstandingElementaryShapes/Notes';
import IntegersNotes from './CBSE/Class6/Mathematics/Integers/Notes';
import FractionsNotes from './CBSE/Class6/Mathematics/Fractions/Notes';
import DecimalsNotes from './CBSE/Class6/Mathematics/Decimals/Notes';
import DataHandlingNotes from './CBSE/Class6/Mathematics/DataHandling/Notes';
import MensurationNotes from './CBSE/Class6/Mathematics/Mensuration/Notes';
import AlgebraNotes from './CBSE/Class6/Mathematics/Algebra/Notes';
import RatioAndProportionNotes from './CBSE/Class6/Mathematics/RatioAndProportion/Notes';
import SymmetryNotes from './CBSE/Class6/Mathematics/Symmetry/Notes';
import PracticalGeometryNotes from './CBSE/Class6/Mathematics/PracticalGeometry/Notes';
import FoodWhereDoesItComeFromNotes from './CBSE/Class6/Science/FoodWhereDoesItComeFrom/Notes';
import ComponentsOfFoodNotes from './CBSE/Class6/Science/ComponentsOfFood/Notes';
import FibreToFabricNotes from './CBSE/Class6/Science/FibreToFabric/Notes';
import SortingMaterialsIntoGroupsNotes from './CBSE/Class6/Science/SortingMaterialsIntoGroups/Notes';
import SeparationOfSubstancesNotes from './CBSE/Class6/Science/SeparationOfSubstances/Notes';
import ChangesAroundUsNotes from './CBSE/Class6/Science/ChangesAroundUs/Notes';
import GettingToKnowPlantsNotes from './CBSE/Class6/Science/GettingToKnowPlants/Notes';
import BodyMovementsNotes from './CBSE/Class6/Science/BodyMovements/Notes';
import TheLivingOrganismsAndTheirSurroundingsNotes from './CBSE/Class6/Science/TheLivingOrganismsAndTheirSurroundings/Notes';
import MotionAndMeasurementOfDistancesNotes from './CBSE/Class6/Science/MotionAndMeasurementOfDistances/Notes';
import LightShadowsAndReflectionsNotes from './CBSE/Class6/Science/LightShadowsAndReflections/Notes';
import ElectricityAndCircuitsNotes from './CBSE/Class6/Science/ElectricityAndCircuits/Notes';
import FunWithMagnetsNotes from './CBSE/Class6/Science/FunWithMagnets/Notes';
import WaterNotes from './CBSE/Class6/Science/Water/Notes';
import AirAroundUsNotes from './CBSE/Class6/Science/AirAroundUs/Notes';
import GarbageInGarbageOutNotes from './CBSE/Class6/Science/GarbageInGarbageOut/Notes';
import TheEarthInTheSolarSystemNotes from './CBSE/Class6/SocialScience/TheEarthInTheSolarSystem/Notes';
import GlobeLatitudesAndLongitudesNotes from './CBSE/Class6/SocialScience/Geography/GlobeLatitudesAndLongitudes/Notes';
import MotionsOfTheEarthNotes from './CBSE/Class6/SocialScience/Geography/MotionsOfTheEarth/Notes';
import MapsNotes from './CBSE/Class6/SocialScience/Geography/Maps/Notes';
import MajorDomainsOfTheEarthNotes from './CBSE/Class6/SocialScience/Geography/MajorDomainsOfTheEarth/Notes';
import OurCountryIndiaNotes from './CBSE/Class6/SocialScience/Geography/OurCountryIndia/Notes';
import IndiaClimateVegetationAndWildlifeNotes from './CBSE/Class6/SocialScience/Geography/IndiaClimateVegetationAndWildlife/Notes';
import WhatWhereHowAndWhenNotes from './CBSE/Class6/SocialScience/History/WhatWhereHowAndWhen/Notes';
import FromHuntingGatheringToGrowingFoodNotes from './CBSE/Class6/SocialScience/History/FromHuntingGatheringToGrowingFood/Notes';
import InTheEarliestCitiesNotes from './CBSE/Class6/SocialScience/History/InTheEarliestCities/Notes';
import WhatBooksAndBurialsTellUsNotes from './CBSE/Class6/SocialScience/History/WhatBooksAndBurialsTellUs/Notes';
import KingdomsKingsAndAnEarlyRepublicNotes from './CBSE/Class6/SocialScience/History/KingdomsKingsAndAnEarlyRepublic/Notes';
import NewQuestionsAndIdeasNotes from './CBSE/Class6/SocialScience/History/NewQuestionsAndIdeas/Notes';
import FromAKingdomToAnEmpireNotes from './CBSE/Class6/SocialScience/History/FromAKingdomToAnEmpire/Notes';
import VillagesTownsAndTradeNotes from './CBSE/Class6/SocialScience/History/VillagesTownsAndTrade/Notes';
import NewEmpiresAndKingdomsNotes from './CBSE/Class6/SocialScience/History/NewEmpiresAndKingdoms/Notes';
import BuildingsPaintingsAndBooksNotes from './CBSE/Class6/SocialScience/History/BuildingsPaintingsAndBooks/Notes';
import UnderstandingDiversityNotes from './CBSE/Class6/SocialScience/Civics/UnderstandingDiversity/Notes';
import DiversityAndDiscriminationNotes from './CBSE/Class6/SocialScience/Civics/DiversityAndDiscrimination/Notes';
import WhatIsGovernmentNotes from './CBSE/Class6/SocialScience/Civics/WhatIsGovernment/Notes';
import KeyElementsOfADemocraticGovernmentNotes from './CBSE/Class6/SocialScience/Civics/KeyElementsOfADemocraticGovernment/Notes';
import PanchayatiRajNotes from './CBSE/Class6/SocialScience/Civics/PanchayatiRaj/Notes';
import RuralAdministrationNotes from './CBSE/Class6/SocialScience/Civics/RuralAdministration/Notes';
import UrbanAdministrationNotes from './CBSE/Class6/SocialScience/Civics/UrbanAdministration/Notes';
import RuralLivelihoodsNotes from './CBSE/Class6/SocialScience/Civics/RuralLivelihoods/Notes';
import UrbanLivelihoodsNotes from './CBSE/Class6/SocialScience/Civics/UrbanLivelihoods/Notes';
import VahChidiyaJoNotes from './CBSE/Class6/Hindi/VahChidiyaJo/Notes';
import BachpanNotes from './CBSE/Class6/Hindi/Bachpan/Notes';
import NaadaanDostNotes from './CBSE/Class6/Hindi/NaadaanDost/Notes';
import ChandSeThodiSiGappeinNotes from './CBSE/Class6/Hindi/ChandSeThodiSiGappein/Notes';
import AksharonKaMahatvNotes from './CBSE/Class6/Hindi/AksharonKaMahatv/Notes';
import PaarNazarKeNotes from './CBSE/Class6/Hindi/PaarNazarKe/Notes';
import SaathiHaathBadhaanaNotes from './CBSE/Class6/Hindi/SaathiHaathBadhaana/Notes';
import AiseAiseNotes from './CBSE/Class6/Hindi/AiseAise/Notes';
import TikatAlbamNotes from './CBSE/Class6/Hindi/TikatAlbam/Notes';
import JhansiKiRaniNotes from './CBSE/Class6/Hindi/JhansiKiRani/Notes';
import JoDekhkarBhiNahinDekhteNotes from './CBSE/Class6/Hindi/JoDekhkarBhiNahinDekhte/Notes';
import SansarPustakHaiNotes from './CBSE/Class6/Hindi/SansarPustakHai/Notes';
import MainSabseChhotiHoonNotes from './CBSE/Class6/Hindi/MainSabseChhotiHoon/Notes';
import LokageetNotes from './CBSE/Class6/Hindi/Lokageet/Notes';
import NaukarNotes from './CBSE/Class6/Hindi/Naukar/Notes';
import VanKeMaargMeinNotes from './CBSE/Class6/Hindi/VanKeMaargMein/Notes';
import SaansSaansMeinBaansNotes from './CBSE/Class6/Hindi/SaansSaansMeinBaans/Notes';
import WhoDidPatricksHomeworkNotes from './CBSE/Class6/English/WhoDidPatricksHomework/Notes';
import HowTheDogFoundHimselfANewMasterNotes from './CBSE/Class6/English/HowTheDogFoundHimselfANewMaster/Notes';
import TarosRewardNotes from './CBSE/Class6/English/TarosReward/Notes';
import AnIndianAmericanWomanInSpaceKalpanaChawlaNotes from './CBSE/Class6/English/AnIndianAmericanWomanInSpaceKalpanaChawla/Notes';
import ADifferentKindOfSchoolNotes from './CBSE/Class6/English/ADifferentKindOfSchool/Notes';
import WhoIAmNotes from './CBSE/Class6/English/WhoIAm/Notes';
import FairPlayNotes from './CBSE/Class6/English/FairPlay/Notes';
import AGameOfChanceNotes from './CBSE/Class6/English/AGameOfChance/Notes';
import DesertAnimalsNotes from './CBSE/Class6/English/DesertAnimals/Notes';
import TheBanyanTreeNotes from './CBSE/Class6/English/TheBanyanTree/Notes';
import AHouseAHomeNotes from './CBSE/Class6/English/AHouseAHome/Notes';
import TheKiteNotes from './CBSE/Class6/English/TheKite/Notes';
import TheQuarrelNotes from './CBSE/Class6/English/TheQuarrel/Notes';
import BeautyNotes from './CBSE/Class6/English/Beauty/Notes';
import WhereDoAllTheTeachersGoNotes from './CBSE/Class6/English/WhereDoAllTheTeachersGo/Notes';
import TheWonderfulWordsNotes from './CBSE/Class6/English/TheWonderfulWords/Notes';
import VocationNotes from './CBSE/Class6/English/Vocation/Notes';
import WhatifNotes from './CBSE/Class6/English/Whatif/Notes';

import IntegersClass7Notes from './CBSE/Class7/Mathematics/Integers/Notes';
import FractionsAndDecimalsNotes from './CBSE/Class7/Mathematics/FractionsAndDecimals/Notes';
import DataHandlingClass7Notes from './CBSE/Class7/Mathematics/DataHandling/Notes';
import PracticalGeometryClass7Notes from './CBSE/Class7/Mathematics/PracticalGeometry/Notes';
import NutritionInPlantsNotes from './CBSE/Class7/Science/NutritionInPlants/Notes';
import NutritionInAnimalsNotes from './CBSE/Class7/Science/NutritionInAnimals/Notes';
import FibreToFabric7Notes from './CBSE/Class7/Science/FibreToFabric/Notes';
import AcidsBasesAndSaltsNotes from './CBSE/Class7/Science/AcidsBasesAndSalts/Notes';
import ReproductionInPlantsNotes from './CBSE/Class7/Science/ReproductionInPlants/Notes';
import ElectricCurrentAndItsEffectsNotes from './CBSE/Class7/Science/ElectricCurrentAndItsEffects/Notes';
import LightNotes from './CBSE/Class7/Science/Light/Notes';

const notesComponents: { [key: string]: React.FC } = {
  'class6-knowing our numbers': KnowingOurNumbersNotes,
  'class6-whole numbers': WholeNumbersNotes,
  'class6-playing with numbers': PlayingWithNumbersNotes,
  'class6-basic geometrical ideas': BasicGeometricalIdeasNotes,
  'class6-understanding elementary shapes': UnderstandingElementaryShapesNotes,
  'class6-integers': IntegersNotes,
  'class6-fractions': FractionsNotes,
  'class6-decimals': DecimalsNotes,
  'class6-data handling': DataHandlingNotes,
  'class6-mensuration': MensurationNotes,
  'class6-algebra': AlgebraNotes,
  'class6-ratio and proportion': RatioAndProportionNotes,
  'class6-symmetry': SymmetryNotes,
  'class6-practical geometry': PracticalGeometryNotes,
  'class6-food where does it come from': FoodWhereDoesItComeFromNotes,
  'class6-components of food': ComponentsOfFoodNotes,
  'class6-fibre to fabric': FibreToFabricNotes,
  'class6-sorting materials into groups': SortingMaterialsIntoGroupsNotes,
  'class6-separation of substances': SeparationOfSubstancesNotes,
  'class6-changes around us': ChangesAroundUsNotes,
  'class6-getting to know plants': GettingToKnowPlantsNotes,
  'class6-body movements': BodyMovementsNotes,
  'class6-the living organisms and their surroundings': TheLivingOrganismsAndTheirSurroundingsNotes,
  'class6-motion and measurement of distances': MotionAndMeasurementOfDistancesNotes,
  'class6-light shadows and reflections': LightShadowsAndReflectionsNotes,
  'class6-electricity and circuits': ElectricityAndCircuitsNotes,
  'class6-fun with magnets': FunWithMagnetsNotes,
  'class6-water': WaterNotes,
  'class6-air around us': AirAroundUsNotes,
  'class6-garbage in garbage out': GarbageInGarbageOutNotes,
  'class6-the earth in the solar system': TheEarthInTheSolarSystemNotes,
  'class6-globe latitudes and longitudes': GlobeLatitudesAndLongitudesNotes,
  'class6-motions of the earth': MotionsOfTheEarthNotes,
  'class6-maps': MapsNotes,
  'class6-major domains of the earth': MajorDomainsOfTheEarthNotes,
  'class6-our country india': OurCountryIndiaNotes,
  'class6-india climate vegetation and wildlife': IndiaClimateVegetationAndWildlifeNotes,
  'class6-what where how and when': WhatWhereHowAndWhenNotes,
  'class6-from hunting gathering to growing food': FromHuntingGatheringToGrowingFoodNotes,
  'class6-in the earliest cities': InTheEarliestCitiesNotes,
  'class6-what books and burials tell us': WhatBooksAndBurialsTellUsNotes,
  'class6-kingdoms kings and an early republic': KingdomsKingsAndAnEarlyRepublicNotes,
  'class6-new questions and ideas': NewQuestionsAndIdeasNotes,
  'class6-from a kingdom to an empire': FromAKingdomToAnEmpireNotes,
  'class6-villages towns and trade': VillagesTownsAndTradeNotes,
  'class6-new empires and kingdoms': NewEmpiresAndKingdomsNotes,
  'class6-buildings paintings and books': BuildingsPaintingsAndBooksNotes,
  'class6-understanding diversity': UnderstandingDiversityNotes,
  'class6-diversity and discrimination': DiversityAndDiscriminationNotes,
  'class6-what is government': WhatIsGovernmentNotes,
  'class6-key elements of a democratic government': KeyElementsOfADemocraticGovernmentNotes,
  'class6-panchayati raj': PanchayatiRajNotes,
  'class6-rural administration': RuralAdministrationNotes,
  'class6-urban administration': UrbanAdministrationNotes,
  'class6-rural livelihoods': RuralLivelihoodsNotes,
  'class6-urban livelihoods': UrbanLivelihoodsNotes,
  'class6-vah chidiya jo': VahChidiyaJoNotes,
  'class6-bachpan': BachpanNotes,
  'class6-naadaan dost': NaadaanDostNotes,
  'class6-chand se thodi si gappein': ChandSeThodiSiGappeinNotes,
  'class6-aksharon ka mahatv': AksharonKaMahatvNotes,
  'class6-paar nazar ke': PaarNazarKeNotes,
  'class6-saathi haath badhaana': SaathiHaathBadhaanaNotes,
  'class6-aise aise': AiseAiseNotes,
  'class6-tikat albam': TikatAlbamNotes,
  'class6-jhansi ki rani': JhansiKiRaniNotes,
  'class6-jo dekhkar bhi nahin dekhte': JoDekhkarBhiNahinDekhteNotes,
  'class6-sansar pustak hai': SansarPustakHaiNotes,
  'class6-main sabse chhoti hoon': MainSabseChhotiHoonNotes,
  'class6-lokageet': LokageetNotes,
  'class6-naukar': NaukarNotes,
  'class6-van ke maarg mein': VanKeMaargMeinNotes,
  'class6-saans saans mein baans': SaansSaansMeinBaansNotes,
  'class6-who did patricks homework': WhoDidPatricksHomeworkNotes,
  'class6-how the dog found himself a new master': HowTheDogFoundHimselfANewMasterNotes,
  'class6-taros reward': TarosRewardNotes,
  'class6-an indian american woman in space kalpana chawla': AnIndianAmericanWomanInSpaceKalpanaChawlaNotes,
  'class6-a different kind of school': ADifferentKindOfSchoolNotes,
  'class6-who i am': WhoIAmNotes,
  'class6-fair play': FairPlayNotes,
  'class6-a game of chance': AGameOfChanceNotes,
  'class6-desert animals': DesertAnimalsNotes,
  'class6-the banyan tree': TheBanyanTreeNotes,
  'class6-a house a home': AHouseAHomeNotes,
  'class6-the kite': TheKiteNotes,
  'class6-the quarrel': TheQuarrelNotes,
  'class6-beauty': BeautyNotes,
  'class6-where do all the teachers go': WhereDoAllTheTeachersGoNotes,
  'class6-the wonderful words': TheWonderfulWordsNotes,
  'class6-vocation': VocationNotes,
  'class6-whatif': WhatifNotes,
  'class7-integers': IntegersClass7Notes,
  'class7-fractions and decimals': FractionsAndDecimalsNotes,
  'class7-data handling': DataHandlingClass7Notes,
  'class7-practical geometry': PracticalGeometryClass7Notes,
  'class7-nutrition in plants': NutritionInPlantsNotes,
  'class7-nutrition in animals': NutritionInAnimalsNotes,
  'class7-fibre to fabric': FibreToFabric7Notes,
  'class7-acids bases and salts': AcidsBasesAndSaltsNotes,
  'class7-reproduction in plants': ReproductionInPlantsNotes,
          'class7-electric current and its effects': ElectricCurrentAndItsEffectsNotes,
  'class7-light': LightNotes,
};

const DynamicNotesLoader: React.FC = () => {
  const { grade, chapterName } = useParams<{ grade: string; chapterName: string }>();
  const formattedChapterName = chapterName ? chapterName.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().trim().replace(/\s+/g, ' ') : '';
  const key = `class${grade}-${formattedChapterName}`;
  const ChapterNotesComponent = formattedChapterName ? notesComponents[key] : null;

  if (!ChapterNotesComponent) {
    return <div>Notes not found for {chapterName}.</div>;
  }

  return <ChapterNotesComponent />;
};

export default DynamicNotesLoader;