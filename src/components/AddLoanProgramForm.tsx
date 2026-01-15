"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { X, Plus, Trash2, Search } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface AddLoanProgramFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

// Get all available Lucide icon names
const getAllIconNames = (): string[] => {
  const excludedKeys = [
    'createLucideIcon',
    'default',
    'icons',
    'createElement'
  ];
  
  return Object.keys(LucideIcons)
    .filter((key) => {
      // Exclude known non-icon exports
      if (excludedKeys.includes(key)) return false;
      
      // Check if it's a valid component (should be a function or object with $$typeof)
      const value = (LucideIcons as any)[key];
      return typeof value === 'function' || (value && typeof value === 'object');
    })
    .sort(); // Sort alphabetically for easier browsing
};

// Get icon component by name
const getIconComponent = (iconName: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent || LucideIcons.Home;
};

export function AddLoanProgramForm({ onClose, onSuccess }: AddLoanProgramFormProps) {
  const [title, setTitle] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("Home");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState(["", "", "", ""]);
  const [idealFor, setIdealFor] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [iconSearchQuery, setIconSearchQuery] = useState("");
  const [showIconDropdown, setShowIconDropdown] = useState(false);

  const allIconNames = getAllIconNames();
  
  // Filter icons based on search query
  const filteredIcons = iconSearchQuery
    ? allIconNames.filter((name) =>
        name.toLowerCase().includes(iconSearchQuery.toLowerCase())
      )
    : allIconNames;

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleIdealForChange = (index: number, value: string) => {
    const newIdealFor = [...idealFor];
    newIdealFor[index] = value;
    setIdealFor(newIdealFor);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index: number) => {
    if (features.length > 4) {
      setFeatures(features.filter((_, i) => i !== index));
    }
  };

  const addIdealFor = () => {
    setIdealFor([...idealFor, ""]);
  };

  const removeIdealFor = (index: number) => {
    if (idealFor.length > 4) {
      setIdealFor(idealFor.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate
    if (!title || !description || features.filter(f => f).length < 4 || idealFor.filter(i => i).length < 4) {
      alert("Please fill in all required fields (minimum 4 features and 4 ideal-for items)");
      setIsSubmitting(false);
      return;
    }

    // Get existing programs from localStorage
    const existingPrograms = JSON.parse(localStorage.getItem("customLoanPrograms") || "[]");
    
    // Find the highest ID
    const allIds = existingPrograms.map((p: any) => p.id);
    const maxId = allIds.length > 0 ? Math.max(...allIds) : 6; // Start from 7 if no custom programs
    
    // Create new program
    const newProgram = {
      id: maxId + 1,
      title,
      iconName: selectedIcon,
      description,
      features: features.filter(f => f.trim() !== ""),
      idealFor: idealFor.filter(i => i.trim() !== ""),
      custom: true,
    };

    // Save to localStorage
    const updatedPrograms = [...existingPrograms, newProgram];
    localStorage.setItem("customLoanPrograms", JSON.stringify(updatedPrograms));

    setIsSubmitting(false);
    onSuccess();
    onClose();
  };

  const SelectedIcon = getIconComponent(selectedIcon);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-[#507A56] to-[#8fc295] p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Plus className="size-6 text-white" />
            </div>
            <h2
              className="text-white"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: "1.3",
                fontSize: "1.5rem",
              }}
            >
              Add New Loan Program
            </h2>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30"
          >
            <X className="size-5 text-white" />
          </motion.button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Program Title */}
          <div>
            <label
              className="text-[#1e1e1e] mb-2 block"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
            >
              Program Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., FHA Loans"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#507A56] focus:outline-none transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "16px" }}
              required
            />
          </div>

          {/* Icon Selection - Searchable */}
          <div>
            <label
              className="text-[#1e1e1e] mb-3 block"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
            >
              Select Icon <span className="text-red-500">*</span>
            </label>
            
            {/* Search Input */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                value={iconSearchQuery}
                onChange={(e) => {
                  setIconSearchQuery(e.target.value);
                  setShowIconDropdown(true);
                }}
                onFocus={() => setShowIconDropdown(true)}
                placeholder="Search icons... (e.g., home, building, dollar)"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#507A56] focus:outline-none transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "16px" }}
              />
            </div>

            {/* Current Selection Display */}
            <div className="flex items-center gap-3 p-4 bg-[#e8f4ea] border-2 border-[#507A56] rounded-lg mb-3">
              <div className="bg-white/80 p-2 rounded-lg">
                <SelectedIcon className="size-6 text-[#507A56]" />
              </div>
              <div>
                <p
                  className="text-[#507A56]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.3", fontSize: "0.9rem" }}
                >
                  Selected Icon:
                </p>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.3", fontSize: "0.85rem" }}
                >
                  {selectedIcon}
                </p>
              </div>
            </div>

            {/* Icon Dropdown */}
            {showIconDropdown && (
              <div className="relative">
                <div className="absolute z-10 w-full bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-[300px] overflow-y-auto">
                  {filteredIcons.length > 0 ? (
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 p-3">
                      {filteredIcons.slice(0, 100).map((iconName) => {
                        const IconComponent = getIconComponent(iconName);
                        return (
                          <motion.button
                            key={iconName}
                            type="button"
                            onClick={() => {
                              setSelectedIcon(iconName);
                              setShowIconDropdown(false);
                              setIconSearchQuery("");
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-3 rounded-lg border-2 transition-all relative group ${
                              selectedIcon === iconName
                                ? "border-[#507A56] bg-[#e8f4ea]"
                                : "border-gray-200 bg-white hover:border-[#8fc295]"
                            }`}
                            title={iconName}
                          >
                            <IconComponent
                              className={`size-5 mx-auto ${
                                selectedIcon === iconName ? "text-[#507A56]" : "text-gray-600"
                              }`}
                            />
                            {/* Tooltip on hover */}
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              {iconName}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <p
                        className="text-gray-500"
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "0.9rem" }}
                      >
                        No icons found matching "{iconSearchQuery}"
                      </p>
                    </div>
                  )}
                  {filteredIcons.length > 100 && (
                    <div className="p-3 bg-gray-50 border-t-2 border-gray-200 text-center">
                      <p
                        className="text-gray-600 text-xs"
                        style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
                      >
                        Showing first 100 results. Refine your search to see more.
                      </p>
                    </div>
                  )}
                  <div className="p-2 bg-gray-50 border-t-2 border-gray-200">
                    <button
                      type="button"
                      onClick={() => setShowIconDropdown(false)}
                      className="w-full py-2 text-center text-[#507A56] hover:bg-gray-100 rounded transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: "1", fontSize: "0.85rem" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            <p
              className="text-gray-500 mt-2 text-sm"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
            >
              {allIconNames.length} icons available from Lucide React library
              {iconSearchQuery && ` • Found ${filteredIcons.length} matching "${iconSearchQuery}"`}
            </p>
          </div>

          {/* Description */}
          <div>
            <label
              className="text-[#1e1e1e] mb-2 block"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief one-sentence description (keep under 100 characters)"
              rows={2}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#507A56] focus:outline-none transition-colors resize-none"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "16px" }}
              required
            />
            <p
              className={`text-sm mt-1 ${description.length > 100 ? "text-red-500" : "text-gray-500"}`}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
            >
              {description.length}/100 characters
            </p>
          </div>

          {/* Features */}
          <div>
            <label
              className="text-[#1e1e1e] mb-3 block"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
            >
              Key Features <span className="text-red-500">*</span> (minimum 4)
            </label>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder={`Feature ${index + 1}`}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#507A56] focus:outline-none transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "16px" }}
                    required={index < 4}
                  />
                  {features.length > 4 && (
                    <motion.button
                      type="button"
                      onClick={() => removeFeature(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="size-5" />
                    </motion.button>
                  )}
                </div>
              ))}
            </div>
            <motion.button
              type="button"
              onClick={addFeature}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 flex items-center gap-2 text-[#507A56] hover:text-[#8fc295] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: "1.5", fontSize: "0.9rem" }}
            >
              <Plus className="size-4" />
              Add Another Feature
            </motion.button>
          </div>

          {/* Ideal For */}
          <div>
            <label
              className="text-[#1e1e1e] mb-3 block"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
            >
              Ideal For <span className="text-red-500">*</span> (minimum 4)
            </label>
            <div className="space-y-3">
              {idealFor.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleIdealForChange(index, e.target.value)}
                    placeholder={`Target audience ${index + 1}`}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#507A56] focus:outline-none transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "16px" }}
                    required={index < 4}
                  />
                  {idealFor.length > 4 && (
                    <motion.button
                      type="button"
                      onClick={() => removeIdealFor(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="size-5" />
                    </motion.button>
                  )}
                </div>
              ))}
            </div>
            <motion.button
              type="button"
              onClick={addIdealFor}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 flex items-center gap-2 text-[#507A56] hover:text-[#8fc295] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: "1.5", fontSize: "0.9rem" }}
            >
              <Plus className="size-4" />
              Add Another Target
            </motion.button>
          </div>

          {/* Preview */}
          <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
            <h3
              className="text-[#507A56] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.4", fontSize: "1.1rem" }}
            >
              Preview
            </h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-br from-[#507A56] to-[#8fc295] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <SelectedIcon className="size-5 text-white" />
                  </div>
                  <h4
                    className="text-white"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, lineHeight: "1.3", fontSize: "1.1rem" }}
                  >
                    {title || "Program Name"}
                  </h4>
                </div>
                <p
                  className="text-white/90 text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
                >
                  {description || "Description will appear here"}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, boxShadow: "0 6px 20px rgba(80, 122, 86, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 bg-gradient-to-r from-[#507A56] to-[#8fc295] text-white py-3.5 rounded-lg shadow-md disabled:opacity-50"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1", fontSize: "1rem" }}
            >
              {isSubmitting ? "Adding..." : "Add Loan Program"}
            </motion.button>
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.02, borderColor: "#507A56" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="px-8 py-3.5 rounded-lg border-2 border-gray-300 text-gray-700"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1", fontSize: "1rem" }}
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}