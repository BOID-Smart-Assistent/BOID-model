// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: common/rule.proto
// Protobuf Java Version: 4.27.2

package nl.uu.model.boid;

/**
 * Protobuf type {@code model.boid.Rule}
 */
public final class Rule extends
    com.google.protobuf.GeneratedMessage implements
    // @@protoc_insertion_point(message_implements:model.boid.Rule)
    RuleOrBuilder {
private static final long serialVersionUID = 0L;
  static {
    com.google.protobuf.RuntimeVersion.validateProtobufGencodeVersion(
      com.google.protobuf.RuntimeVersion.RuntimeDomain.PUBLIC,
      /* major= */ 4,
      /* minor= */ 27,
      /* patch= */ 2,
      /* suffix= */ "",
      Rule.class.getName());
  }
  // Use Rule.newBuilder() to construct.
  private Rule(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
    super(builder);
  }
  private Rule() {
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return nl.uu.model.boid.RuleOuterClass.internal_static_model_boid_Rule_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return nl.uu.model.boid.RuleOuterClass.internal_static_model_boid_Rule_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            nl.uu.model.boid.Rule.class, nl.uu.model.boid.Rule.Builder.class);
  }

  public static final int HEAD_FIELD_NUMBER = 1;
  private int head_ = 0;
  /**
   * <code>int32 head = 1;</code>
   * @return The head.
   */
  @java.lang.Override
  public int getHead() {
    return head_;
  }

  public static final int COMPLEMENT_FIELD_NUMBER = 2;
  private int complement_ = 0;
  /**
   * <code>int32 complement = 2;</code>
   * @return The complement.
   */
  @java.lang.Override
  public int getComplement() {
    return complement_;
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (head_ != 0) {
      output.writeInt32(1, head_);
    }
    if (complement_ != 0) {
      output.writeInt32(2, complement_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (head_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(1, head_);
    }
    if (complement_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(2, complement_);
    }
    size += getUnknownFields().getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof nl.uu.model.boid.Rule)) {
      return super.equals(obj);
    }
    nl.uu.model.boid.Rule other = (nl.uu.model.boid.Rule) obj;

    if (getHead()
        != other.getHead()) return false;
    if (getComplement()
        != other.getComplement()) return false;
    if (!getUnknownFields().equals(other.getUnknownFields())) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + HEAD_FIELD_NUMBER;
    hash = (53 * hash) + getHead();
    hash = (37 * hash) + COMPLEMENT_FIELD_NUMBER;
    hash = (53 * hash) + getComplement();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static nl.uu.model.boid.Rule parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static nl.uu.model.boid.Rule parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static nl.uu.model.boid.Rule parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static nl.uu.model.boid.Rule parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static nl.uu.model.boid.Rule parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static nl.uu.model.boid.Rule parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static nl.uu.model.boid.Rule parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static nl.uu.model.boid.Rule parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static nl.uu.model.boid.Rule parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static nl.uu.model.boid.Rule parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static nl.uu.model.boid.Rule parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input);
  }
  public static nl.uu.model.boid.Rule parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessage
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(nl.uu.model.boid.Rule prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessage.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code model.boid.Rule}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessage.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:model.boid.Rule)
      nl.uu.model.boid.RuleOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return nl.uu.model.boid.RuleOuterClass.internal_static_model_boid_Rule_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return nl.uu.model.boid.RuleOuterClass.internal_static_model_boid_Rule_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              nl.uu.model.boid.Rule.class, nl.uu.model.boid.Rule.Builder.class);
    }

    // Construct using nl.uu.model.boid.Rule.newBuilder()
    private Builder() {

    }

    private Builder(
        com.google.protobuf.GeneratedMessage.BuilderParent parent) {
      super(parent);

    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      head_ = 0;
      complement_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return nl.uu.model.boid.RuleOuterClass.internal_static_model_boid_Rule_descriptor;
    }

    @java.lang.Override
    public nl.uu.model.boid.Rule getDefaultInstanceForType() {
      return nl.uu.model.boid.Rule.getDefaultInstance();
    }

    @java.lang.Override
    public nl.uu.model.boid.Rule build() {
      nl.uu.model.boid.Rule result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public nl.uu.model.boid.Rule buildPartial() {
      nl.uu.model.boid.Rule result = new nl.uu.model.boid.Rule(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(nl.uu.model.boid.Rule result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.head_ = head_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.complement_ = complement_;
      }
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof nl.uu.model.boid.Rule) {
        return mergeFrom((nl.uu.model.boid.Rule)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(nl.uu.model.boid.Rule other) {
      if (other == nl.uu.model.boid.Rule.getDefaultInstance()) return this;
      if (other.getHead() != 0) {
        setHead(other.getHead());
      }
      if (other.getComplement() != 0) {
        setComplement(other.getComplement());
      }
      this.mergeUnknownFields(other.getUnknownFields());
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 8: {
              head_ = input.readInt32();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 16: {
              complement_ = input.readInt32();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
            default: {
              if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                done = true; // was an endgroup tag
              }
              break;
            } // default:
          } // switch (tag)
        } // while (!done)
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.unwrapIOException();
      } finally {
        onChanged();
      } // finally
      return this;
    }
    private int bitField0_;

    private int head_ ;
    /**
     * <code>int32 head = 1;</code>
     * @return The head.
     */
    @java.lang.Override
    public int getHead() {
      return head_;
    }
    /**
     * <code>int32 head = 1;</code>
     * @param value The head to set.
     * @return This builder for chaining.
     */
    public Builder setHead(int value) {

      head_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>int32 head = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearHead() {
      bitField0_ = (bitField0_ & ~0x00000001);
      head_ = 0;
      onChanged();
      return this;
    }

    private int complement_ ;
    /**
     * <code>int32 complement = 2;</code>
     * @return The complement.
     */
    @java.lang.Override
    public int getComplement() {
      return complement_;
    }
    /**
     * <code>int32 complement = 2;</code>
     * @param value The complement to set.
     * @return This builder for chaining.
     */
    public Builder setComplement(int value) {

      complement_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>int32 complement = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearComplement() {
      bitField0_ = (bitField0_ & ~0x00000002);
      complement_ = 0;
      onChanged();
      return this;
    }

    // @@protoc_insertion_point(builder_scope:model.boid.Rule)
  }

  // @@protoc_insertion_point(class_scope:model.boid.Rule)
  private static final nl.uu.model.boid.Rule DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new nl.uu.model.boid.Rule();
  }

  public static nl.uu.model.boid.Rule getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Rule>
      PARSER = new com.google.protobuf.AbstractParser<Rule>() {
    @java.lang.Override
    public Rule parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      Builder builder = newBuilder();
      try {
        builder.mergeFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(builder.buildPartial());
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(e)
            .setUnfinishedMessage(builder.buildPartial());
      }
      return builder.buildPartial();
    }
  };

  public static com.google.protobuf.Parser<Rule> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Rule> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public nl.uu.model.boid.Rule getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

