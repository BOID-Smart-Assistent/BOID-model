// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: algorithm/schedule.proto
// Protobuf Java Version: 4.27.2

package nl.uu.model.boid.algorithm;

public final class ScheduleOuterClass {
  private ScheduleOuterClass() {}
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 27,
      /* patch= */ 2,
      /* suffix= */ "",
      ScheduleOuterClass.class.getName());
  }
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_model_boid_Schedule_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_model_boid_Schedule_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_model_boid_Timeslot_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_model_boid_Timeslot_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_model_boid_Presentation_descriptor;
  static final 
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_model_boid_Presentation_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\030algorithm/schedule.proto\022\nmodel.boid\"3" +
      "\n\010Schedule\022\'\n\ttimeslots\030\001 \003(\0132\024.model.bo" +
      "id.Timeslot\"F\n\010Timeslot\022\n\n\002id\030\001 \001(\t\022.\n\014p" +
      "resentation\030\002 \001(\0132\030.model.boid.Presentat" +
      "ion\")\n\014Presentation\022\n\n\002id\030\001 \001(\t\022\r\n\005label" +
      "\030\002 \001(\tB\036\n\032nl.uu.model.boid.algorithmP\001b\006" +
      "proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_model_boid_Schedule_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_model_boid_Schedule_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_model_boid_Schedule_descriptor,
        new java.lang.String[] { "Timeslots", });
    internal_static_model_boid_Timeslot_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_model_boid_Timeslot_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_model_boid_Timeslot_descriptor,
        new java.lang.String[] { "Id", "Presentation", });
    internal_static_model_boid_Presentation_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_model_boid_Presentation_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_model_boid_Presentation_descriptor,
        new java.lang.String[] { "Id", "Label", });
    descriptor.resolveAllFeaturesImmutable();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
