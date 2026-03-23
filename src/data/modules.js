import { 
  BarChart2, MessageSquare, Package, CheckCircle,
  Factory, FileText, Briefcase, Zap,
  TrendingUp, Layers, Search, Settings,
  Clock, Clipboard, Database, Shield,
  RefreshCw, TriangleAlert, Wrench, Cpu,
  Upload, Eye, ArrowRightCircle, CircleCheck,
} from 'lucide-react';

export const modules = [
  {
    id: 'ppc',
    name: 'PPC',
    icon: BarChart2,
    subOptions: [
      { id: 'mr-movement',  name: 'MR Movement System',  icon: TrendingUp, desc: 'Material Requisition tracking' },
      { id: 'kmr-movement', name: 'KMR Movement System', icon: Layers,     desc: 'Kit Material Requisition tracking' },
    ]
  },
  {
    id: 'tech-query',
    name: 'Technical Query',
    icon: MessageSquare,
    subOptions: [
      { id: 'prod-query', name: 'Production Query Resolution', icon: MessageSquare, desc: 'Resolve production level queries' },
    ]
  },
  {
    id: 'store',
    name: 'Store',
    icon: Package,
    subOptions: [
      { id: 'rm-pending',   name: 'Raw Material Pending', icon: Package,   desc: 'Pending for reservation' },
      { id: 'cts-pending',  name: 'Details/SA Pending',   icon: Clipboard, desc: 'Pending for CTS' },
    ]
  },
  {
    id: 'inspection',
    name: 'Inspection',
    icon: CheckCircle,
    subOptions: [
      { id: 'irs',          name: 'IRS',             icon: Shield,      desc: 'Inspection Reporting System' },
      { id: 'memo-clear',   name: 'Memo Clearance',  icon: CheckCircle, desc: 'Inspection Memo clearance system' },
    ]
  },
  {
    id: 'shop',
    name: 'Shop',
    icon: Factory,
    subOptions: [
      { id: 'master-report',  name: 'Master Report',   icon: FileText, desc: 'View shop master reports' },
      { id: 'update-master',  name: 'Update Master',   icon: Upload,   desc: 'Modify shop master data' },
      { id: 'search-drg',     name: 'Search Drg / Pl', icon: Search,   desc: 'Search Drawing / Plugin from IFS' },
    ]
  },
  {
    id: 'route-card',
    name: 'RouteCard',
    icon: FileText,
    subOptions: [
      { id: 'view-rc',       name: 'View Route Card',        icon: Eye,           desc: 'Detailed route card overview' },
      { id: 'fwd-quality',   name: 'Fwd to Quality',         icon: ArrowRightCircle, desc: 'Forward to quality team' },
      { id: 'inner-quality', name: 'Fwd in Quality',         icon: RefreshCw,     desc: 'Forward between quality teams' },
      { id: 'act-quality',   name: 'Action by Quality',      icon: CircleCheck,   desc: 'Processed by quality' },
      { id: 'pend-approval', name: 'Pending Approval',        icon: Clock,         desc: 'Qua-Pending for further approval' },
      { id: 'final-apprv',   name: 'Final Approval',          icon: Shield,        desc: 'Qua-Final approval' },
      { id: 'comp-pdo',      name: 'Complete PDO',            icon: CircleCheck,   desc: 'Production Delivery Order completion' },
      { id: 'define-insp',   name: 'Define Insp. List',       icon: Clipboard,     desc: 'Define quality inspection list' },
      { id: 'fwd-list',      name: 'Forwarded Records',       icon: Layers,        desc: 'Forwarded records list' },
      { id: 'act-list',      name: 'Action Records',          icon: Database,      desc: 'Action records list' },
      { id: 'mat-issue',     name: 'Material Issue',          icon: Package,       desc: 'Material issue pending list' },
      { id: 'retract-fwd',   name: 'Retract Forwarded',       icon: TriangleAlert, desc: 'Retract forwarded records' },
    ]
  },
  {
    id: 'assy-job-card',
    name: 'Assy. Job Card',
    icon: Briefcase,
    subOptions: [
      { id: 'view-jc',        name: 'View Job Card',          icon: Eye,           desc: 'Detailed job card overview' },
      { id: 'jc-fwd-quality', name: 'Fwd to Quality',         icon: ArrowRightCircle, desc: 'Forward to quality control' },
      { id: 'jc-inner-qual',  name: 'Fwd in Quality',         icon: RefreshCw,     desc: 'Forward between quality departments' },
      { id: 'jc-remarks',     name: 'Remarks by Quality',     icon: MessageSquare, desc: 'Quality remarks' },
      { id: 'sub-assy-mstr',  name: 'Define Sub-Assy Master', icon: Settings,      desc: 'Define sub-assembly master' },
      { id: 'jc-fwd-list',    name: 'Forwarded Records',      icon: Layers,        desc: 'Forwarded records list' },
      { id: 'jc-act-list',    name: 'Actioned Records',       icon: Database,      desc: 'Actioned records list' },
      { id: 'assy-ops',       name: 'Assy Job Card Ops',      icon: Wrench,        desc: 'Define Assy-job card operations' },
      { id: 'jc-retract',     name: 'Retract Forwarded',      icon: TriangleAlert, desc: 'Retract forwarded records' },
    ]
  },
  {
    id: 'change-mgmt',
    name: 'Change Management',
    icon: Zap,
    subOptions: [
      { id: 'mat-change',       name: 'Pend. Material Change',   icon: Package,     desc: 'Pending material change requests' },
      { id: 'opn-chg-tech',     name: 'Pend. Opn. Change (Tech)', icon: Wrench,     desc: 'Pending technical operation change' },
      { id: 'opn-chg-msd',      name: 'Pend. Opn. Change (MSD)', icon: Cpu,         desc: 'Pending MSD operation change' },
      { id: 'comp-opn-chg',     name: 'Complete Opn. Change',    icon: CircleCheck, desc: 'Completed operation change' },
      { id: 'comp-mat-chg',     name: 'Completed Mat. Change',   icon: CircleCheck, desc: 'Completed material change' },
    ]
  }
];
